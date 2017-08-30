import loadRepos from '../reducers/local';
import geogigJS from 'geogig-js';
import { OurToaster } from "./../components/ui/toast";

let geogig = new geogigJS({bin: "C:\\geogig\\bin\\geogig.bat",cwd: "C:\\patchForRepository"});
let host = geogig.serve.connect({uri: 'http://localhost:8182'})
OurToaster.show({ message: "Toasted!" });

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
          ]).then(e =>{
            dispatch ({type: 'DETAILREPO', details: e})
          })
        })
    }
  }
  static load(value){
    return dispatch => {
        dispatch({type:'LOADING', value});
        return value;
    }
  }
}
