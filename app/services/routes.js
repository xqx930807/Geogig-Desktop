import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//REDUX
import {createStore, applyMiddleware, combineReducers} from 'redux';
import  {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

//REDUCERS
import {loadRepos} from './../reducers/local';

//CONTAINERS
import dashboard from './../containers/dashboard';
import repositories from './../containers/repositories';
import connections from './../containers/connections'
import config from './../containers/config'
import detail from './../containers/repositories.detail';

// const reducers = combineReducers({loadRepos});
const store = createStore(loadRepos, applyMiddleware(thunkMiddleware));

export default (
  <Provider store={store}>
     <HashRouter>
       <Switch>
          <Route exact path="/" component={dashboard} />
            <Route path="/config" component={config} />
            <Route path="/repositories" component={repositories} />
            <Route path="/detail/:name" component={detail} />
            <Route path="/connections" component={connections} />
        </Switch>
     </HashRouter>
   </Provider>
)
