const {spawn, exec} = require ('child_process');

class Utils {

	static promiseProcess(child) {
		child.stdout.setEncoding('utf8');
		return new Promise((resolve, reject) => {
				child.addListener("error", reject);
				child.stdout.on('data', resolve);
		});
	}

	static start (config) {
		var child = spawn(config.bin, ['serve', '--multirepo'], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static stop (){
		return exec("taskkill /f /im java.exe", (error, stdout, stderr) => stdout);
	}
	static initRepo (params, config) {
		var child = spawn(config.bin, ['init', params.name], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
	static cloneRepo (params, config) {
		var child = spawn(config.bin, ['clone', params.uri, params.name], {cwd: config.cwd, detached: false});
		return this.promiseProcess(child);
	}
}

module.exports = Utils
