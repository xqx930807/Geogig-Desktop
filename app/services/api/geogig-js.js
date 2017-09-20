import loadRepos from '../../reducers/local';
import geogigJS from './geogig-js/main';
// import geogigJS from 'geogig-js';
import { OurToaster } from "./../../components/ui/toast";

let geogig = new geogigJS({bin: "C:\\geogig\\bin\\geogig.bat",cwd: "C:\\patchForRepository"});
let host = geogig.serve.connect({uri: 'http://localhost:8182'})

// OurToaster.show({ message: "Toasted!" });

export default class Api {

  static loadLocal (){
    return dispatch => {
      host.repos.find().then(repos =>  {
        dispatch({type:'LISTAGEM', repos});
        return repos;
      }).catch(error => console.log(error))
    }
  }
  static detailRepo (repoName){
    return dispatch => {
      host.repos.findOne({name: repoName})
        .then(repo => {
          Promise.all([
            repo.lsTree,
            repo.log({countChanges: true})
          ])
          .then(e => {
            dispatch ({type: 'DETAILREPO', details: e})
          })
      })
    }
  }
  static beginTransaction(repoName, msg, dir){
    let repo = host.repos.findOne({name: repoName});

    repo.then(e => e.beginTransaction())
      .then(e => {
        repo.then(data =>
          data.geopackage.import({
            fileUpload: dir,
            transactionId: e.response.Transaction.ID,
            interchange: true,
            format: 'gpkg',
            message: msg
          })
          .then(log => {
            setTimeout( () => {
              repo.then( endE => {
                console.log(log.task.transactionId);
                return endE.endTransaction({transactionId: log.task.transactionId}, {cancel: false})
              }).then(e => OurToaster.show({ message: e.response.Transaction.ID }))
            }, 3000);

          })
        )
      })
  }
  static newRepository(repoName){
    geogig.repo({name: repoName}).init
      .then(e => {
        OurToaster.show({ message: e });
      })
  }
}
