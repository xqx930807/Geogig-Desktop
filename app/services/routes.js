import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
//REDUX
import {createStore, applyMiddleware, combineReducers} from 'redux';
import  {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

//REDUCERS
import {loadRepos} from './../reducers/local';

//CONTAINERS
import App from '../App';


import {Content} from './../components/Content.js'
import {Local, Remote} from './../components/local.js'

// const reducers = combineReducers({loadRepos});
const store = createStore(loadRepos, applyMiddleware(thunkMiddleware));
import { menuItems, farMenuItems } from '../components/items'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import NavBar from '../components/NavBar.js'

export default (
  <Provider store={store}>
    <Router>
      <div>
        <CommandBar items={ menuItems } farItems={ farMenuItems }  />
        <br/>
        <Route exact path='/' component={App}/>
        <Route  path='/local' component={Local}/>
        <Route  path='/remote' component={Remote}/>
      </div>
    </Router>
   </Provider>
)
