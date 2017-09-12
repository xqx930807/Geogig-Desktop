const Utils = require ('../services/Utils');
const ApiExtension = require('../services/web-api.extension');

class Tools  {
  constructor(params, config){
    this._params = params;
    this._config = config;
    this._ApiExtension = new ApiExtension(params);
  }
  get _apiEx (){return this._ApiExtension};

  get repos(){
    return {
      find: () => this._apiEx.repo.find(),
      findOne: (filter) => this._apiEx.repo.findOne(filter)
    }
  };
  get tasks(){
    return {
      find: () => this._apiEx.tasks.find(),
      findOne: (filter) => this._apiEx.tasks.findOne(filter)
    }
  }
  get init(){
    return Utils.initRepo(this._params, this._config);
  };
}
module.exports = Tools
