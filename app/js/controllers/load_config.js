function initial_config($scope, $location){
	$s = $scope;
	$s.mydb = mydb;
	db.openItem('SERVER') ? console.info('Local Server Already Started') : 
	db.setItem('SERVER', true), Repository.initServer((a,b,c)=>console.log(a,b,c));
	$s.selectRepo = (selectedFild)=> {db.setItem('repoLocalAtivo',selectedFild)
		return $location.path('/repo/view')
	}
	$s.selectServeRemote = (selectedFild)=>{db.setItem('serveRemoteAtivo',selectedFild);
		$location.path('/repo/view_remoto');
	};
	$s.currentRepoId = ()=> db.openItem('repoLocalAtivo');
	$s.currentServeRemoteId = ()=> db.openItem('serveRemoteAtivo');
	$s.lastRepoId = ()=> $s.mydb.infoRepositorios.local.length - 1;
	$s.currentRepoData = ()=>$s.mydb.infoRepositorios.local[$s.currentRepoId()];
	$s.currentRepoRemoteData = ()=>$s.mydb.infoRepositorios.remoto[$s.currentServeRemoteId()];
}
angular
.module('geogig-desktop')
.controller('initial_config', initial_config)