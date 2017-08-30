import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import  {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {loadRepos} from './reducers/local';

import App from './components/App';

// const reducers = combineReducers({loadRepos});
const store = createStore(loadRepos, applyMiddleware(thunkMiddleware));

ReactDOM.render((
  <Provider store={store}>
     <HashRouter>
        <Route exact path="/" component={App} />
     </HashRouter>
   </Provider>
), document.getElementById('App'));
// <Route path="dashboard" component={App} />
