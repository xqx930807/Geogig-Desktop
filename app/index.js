import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import  {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {loadRepos} from './reducers/local';

import dashboard from './views/dashboard';
import repositories from './views/repositories';
import detail from './views/repositories.detail';
import connections from './views/connections'

// const reducers = combineReducers({loadRepos});
const store = createStore(loadRepos, applyMiddleware(thunkMiddleware));

ReactDOM.render((
  <Provider store={store}>
     <HashRouter>
       <Switch>
          <Route exact path="/" component={dashboard} />
            <Route path="/repositories" component={repositories} />
            <Route path="/detail/:name" component={detail} />
            <Route path="/connections" component={connections} />
        </Switch>
     </HashRouter>
   </Provider>
), document.getElementById('App'));
