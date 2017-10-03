import loadRepos from '../../reducers/local';
import geogigJS from './geogig-js/main';
// import geogigJS from 'geogig-js';
import { OurToaster } from "./../../components/ui/toast";

let config = JSON.parse(localStorage.getItem('config'))
let geogig = new geogigJS({bin: "C:\\geogig\\bin\\geogig.bat", cwd: config.dir});
let host = geogig.serve.connect({uri: 'http://localhost:8182'})

host.repos.find().catch( (error) =>{
  console.log('Iniciando o Servidor');
  geogig.serve.init()
})

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
  static checkTaskBind(transactionId){
    return (async (transactionId) => {
      let check = await host.tasks.findOne({id: transactionId});
      try {
        return await check.tasks.task.status;
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    })()
  }
  static beginTransaction(repoName, msg, dir){
    let checkTask = (id) => this.checkTaskBind(id);

    (async function logFetch() {
      let repo = await host.repos.findOne({name: repoName});
      try {
        let transactionID = await repo.beginTransaction;
        let geopackageImport = await repo.geopackage.import({
            fileUpload: dir,
            transactionId: transactionID.response.Transaction.ID,
            interchange: true,
            format: 'gpkg',
            message: msg
          });

          while(await checkTask(transactionID.response.Transaction.ID) !== 'FINISHED'){
            console.log('processing');
          }
          repo.endTransaction({transactionId: transactionID.response.Transaction.ID}, {cancel: false})
          .then(e =>
            OurToaster.show({ message: 'Commit efetuado com sucesso' })
          )

      }
      catch (err) {
        console.log('fetch failed', err);
      }
    })()
  }
  static newRepository(repoName){
    geogig.repo({name: repoName}).init
      .then(e => {
        OurToaster.show({ message: e });
      })
  }

}
