import React, {Component} from 'react'
import PropTypes from 'prop-types';
import api from './../services/api/geogig-js';
import Repository from './Repository'
import Panel from './Panel'

import './../src/assets/css/Content.css'

class Content extends Component {
  constructor(props){
   super(props);
    this.state = {
      repos:{
        repo:[], remote:[]
      }
    };
  }
  set STORE_dispatch (data) { this.context.store.dispatch(data) }
  STORE_subscribe () {
    this.context.store.subscribe( () =>{
      this.setState(this.context.store.getState())
    })
  }

  componentDidMount(){
    let API = new api();
    this.STORE_subscribe()

    this.STORE_dispatch = API.loadLocal();
  }
  render(){
    return(
    <div>
      <Repository data={this.state} />
      <Panel />
    </div>
)
  }
}




Content.contextTypes = {
  store: PropTypes.object.isRequired
};
export  {Content}
