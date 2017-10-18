import loadRepos from '../../reducers/local';
import geogigJS from './geogig-js/main';

class Api {
  constructor(serveAdress = 'http://localhost:8182'){
    this.config = JSON.parse(localStorage.getItem('config'));
    this.geogig = new geogigJS({bin: "C:\\geogig\\bin\\geogig.bat", cwd: this.config.dir});
    this.host = this.geogig.serve.connect({uri: serveAdress});
  }
  serveInit(){
    this.host.repos.find().catch( (error) =>{
      console.log('Iniciando o Servidor');
      this.geogig.serve.init()

    })
  }

  loadLocal (){
    return dispatch => {
      this.host.repos.find().then(repos =>  {
        dispatch({type:'LISTAGEM', repos});
        return repos;
      }).catch(error => console.log(error))
    }
  }
  detailRepo (repoName){
    return dispatch => {
      this.host.repos.findOne({name: repoName})
        .then(repo => {
          Promise.all([
            repo.lsTree,
            repo.log({countChanges: true})
          ])
          .then(e => {
            console.log(e);
            dispatch ({type: 'DETAILREPO', details: e})
          })
      })
    }
  }
  checkTaskBind(transactionId){
    return (async (transactionId) => {
      let check = await this.host.tasks.findOne({id: transactionId});
      try {
        return await check.tasks.task.status;
      }
      catch (err) {
        console.log('fetch failed', err);
      }
    })()
  }
  beginTransaction(repoName, msg, dir){
    let checkTask = (id) => this.checkTaskBind(id);

    (async function logFetch() {
      let repo = await this.host.repos.findOne({name: repoName});
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
          .then(e =>{
            // OurToaster.show({ message: 'Commit efetuado com sucesso' })
          }
          )

      }
      catch (err) {
        console.log('fetch failed', err);
      }
    })()
  }
  newRepository(repoName){
    this.geogig.repo({name: repoName}).init
      .then(e => {
        // OurToaster.show({ message: e });
      })
  }
  cloneRepository(repoName, repoUri){
    this.geogig.repo({uri: repoUri, name: repoName}).clone
    .then(e => {
      // OurToaster.show({ message: e });
    })
  }
}
export default Api

// let API = new Api()
// API.host.repos.findOne({name: 'dsdasd'}).then(repo => {
//
//     Promise.all([ repo.lsTree, repo.log({countChanges: true})])
//     .then(e => {
//       console.log(e);
//     })
// })
