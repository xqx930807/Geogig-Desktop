const geogigJS = require ('./app/services/api/geogig-js/main');


let geogig = new geogigJS({
  bin: "C:\\geogig\\bin\\geogig.bat",
  cwd: "C:\\patchForRepository"
});

let host = geogig.serve.connect({uri:'http://localhost:8182'})
let rb = host.repos.findOne({name: 'rb'})
geogig.repo({uri: 'http://localhost:8182/repos/rb', name: 'rb.remote'}).clone
.then(e => console.log(e))

// console.log(host);
