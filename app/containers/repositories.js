import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Navbar from '../components/ui/Navbar';
import { Tab2, Tabs2 } from "@blueprintjs/core";
import {Link} from 'react-router-dom';

import '../src/assets/css/App.css';
import api from '../services/api/geogig-js';

class App extends Component {
  constructor(props){
   super(props);
    this.state = {repos:{repo:[]}};
  }
  componentDidMount(){
    this.context.store.dispatch(api.loadLocal());

  }

  componentWillMount(){
    this.context.store.subscribe(() => {
      this.setState(this.context.store.getState());
    })
  }

  render() {
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
                    <button type="button" className="pt-button pt-intent-success pt-icon-add " >Button</button>
                </Tabs2>
              </div>
        </Grid>
      </div>
    );
  }
}

const Local = (props) => {
  return(
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
              <td><Link to={{pathname:`/detail/${e.name}`}}>{e.name}</Link>
              </td>
              <td>{e.href}</td>
              <td><span onClick={() => {console.log('delete => '+ e.name)}} className="pt-icon-standard pt-icon-delete"></span></td>
            </tr>
          )
        }

      </tbody>
    </table>
  </div>
)};

const Remote = (props) => (
  <div>
    <div className="pt-callout .modifier">
    </div>
  </div>
);

App.contextTypes = {
  store: PropTypes.object.isRequired
};
export default App;
