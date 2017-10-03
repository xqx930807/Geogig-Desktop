import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Navbar from '../components/ui/Navbar';
import { Tab2, Tabs2 } from "@blueprintjs/core";
import {Link} from 'react-router-dom';

import '../src/assets/css/App.css';
import api from '../services/api/geogig-js';

import ModalnewRepo from '../components/repositories/modal_dialog'

class App extends Component {
  constructor(props){
   super(props);
    this.state = {
      repos:{repo:[],remote:[]}
    };
  }

  get getState () { return this.context.store.getState() }
  set dispatch (data) {this.context.store.dispatch(data) }
  set subscribe (data) { this.context.store.subscribe(data) }

  componentDidMount(){
    this.dispatch = api.loadLocal();
    this.subscribe = () => this.setState(this.getState);
  }

  render() {
    // let ad = this.state.repos.repo.filter(elem => elem.name.includes('.remote') ? elem : null)
    return (
      <div>
        <Grid fluid={true}>
          <Row className="show-grid"><Navbar/></Row>
          <Row  className="show-grid"></Row>
          <br></br>
          <div className="pt-card pt-elevation-2">
            <Tabs2 id="Tabs2Example" >
              <Tab2 id="rx" title="Local" panel={<Local data={this.state} />} />
              <Tab2 id="ng" title="Remote" panel={<Remote data={this.state} />} />
                <Tabs2.Expander />
                <ModalnewRepo/>
            </Tabs2>
          </div>
        </Grid>
      </div>
    );
  }
}

const Local = (props) => (
  <div>
    <table className="pt-table pt-interactive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Adress</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.repos.repo.map(e =>
            <tr key={e.name}>
              <td>
                <Link to={{pathname:`/detail/${e.name}`}}
                  onClick={
                    () => {
                      localStorage.setItem('repoActive', e.href);
                      !localStorage.getItem(e.href)
                        ? localStorage.setItem(e.href, '')
                        : null;
                    }
                  }>
                  {e.name}
                </Link>
              </td>
              <td>{e.href}</td>
              <td><span onClick={() => {console.log('delete => '+ e.name)}} className="pt-icon-standard pt-icon-delete"></span></td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

const Remote = (props) => (
  <div>
    <table className="pt-table pt-interactive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Adress</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.repos.remote.map(e =>
            <tr key={e.name}>
              <td>
                <Link to={{pathname:`/detail/${e.name}`}}
                  onClick={
                    () => {
                      localStorage.setItem('repoActive', e.href);
                      !localStorage.getItem(e.href)
                        ? localStorage.setItem(e.href, '')
                        : null;
                    }
                  }>
                  {e.name.replace('.remote','')}
                </Link>
              </td>
              <td>{e.href}</td>
              <td><span onClick={() => {console.log('delete => '+ e.name)}} className="pt-icon-standard pt-icon-delete"></span></td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

App.contextTypes = {
  store: PropTypes.object.isRequired
};
export default App;
