function historyCtrl(){
	/*Get Commit*/
	s.commits = undefined;
    let commitSelected = [];
	s.limit = 2; s.checked = 0;

    Geogig.log.call(s.Repository()).then(data => {
        s.$apply(()=> s.commits = JSON.parse(data).response.commit)
    });

    s.checkChanged = commit => {
        commit.activate ? s.checked++ : s.checked--;
        commit.activate ? commitSelected.push(commit.id) : checkIdAndRemove(commit.id);
        checkIdAndRemove = (id) => {
            let commitId = commitSelected.indexOf(id);
            if (commitId > -1) {
                commitSelected.splice(commitId, 1);
            }
        }
    }

	s.differenceCommit = () => {
        Geogig.diffCommit.call(s.Repository(), ...commitSelected)
            .then(features => {
                s.$apply(() => {
                    s.geojson.geogigLayer.data = WKTtoGeojson.init(features)
                });
            });
	};
}
angular
.module('geogig-desktop')
.controller('historyCtrl', historyCtrl)