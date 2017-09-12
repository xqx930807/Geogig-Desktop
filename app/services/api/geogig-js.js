import loadRepos from '../../reducers/local';
import geogigJS from './geogig-js/main';
import { OurToaster } from "./../../components/ui/toast";

let geogig = new geogigJS({bin: "C:\\geogig\\bin\\geogig.bat",cwd: "C:\\patchForRepository"});
let host = geogig.serve.connect({uri: 'http://localhost:8182'})

OurToaster.show({ message: "Toasted!" });
let gpkgDB = (repos) => repos.repo.map(e => {e.locationGPKG = undefined;return e});
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
          ]).then(e => {
            dispatch ({type: 'DETAILREPO', details: e})
          })
        })
    }
  }
  static beginTransaction(repoName, dir){
    let repo = host.repos.findOne({name: repoName});
    repo.then(e => e.beginTransaction()).then(e => {
      host.repos.findOne({name: repoName})
      .then(repo =>
        repo.geopackage.import({
          fileUpload: 'C:\\Users\\jlanio\\Desktop\\GeoPackage\\imovel.gpkg',
          transactionId: e.response.Transaction.ID,
          interchange: true,
          format: 'gpkg',
          message: 'Ola Mundo'
        }).then(e => console.log(e))
      );
    })
  }
}
