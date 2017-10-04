import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Navbar from '../components/ui/Navbar';
import { Tab2, Tabs2 } from "@blueprintjs/core";
import {Link} from 'react-router-dom';

import '../src/assets/css/App.css';
import api from '../services/api/geogig-js';

import ModalnewRepo from '../components/connections/modal_dialog'

class dashboard extends Component {
  constructor(props){
   super(props);
    this.state = {
      connected: JSON.parse(localStorage.getItem('connected')),
      repos:{repo:[]}
    };
  }

  componentDidMount(){
    // console.log(this.state);
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
              <Tab2 id="rx" title="External Connect" panel={<Local data={this.state} />} />
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
          props.data.connected.in.map(e =>
            <tr key={e.name}>
              <td>
                <Link to={{pathname:`/remote/{"name":"${e.name}", "type": "${e.type}:8182"}`}}>
                  {e.name}
                </Link>
              </td>
              <td>{e.type}</td>
              <td><span onClick={() => {console.log('delete => '+ e.name)}} className="pt-icon-standard pt-icon-delete"></span></td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);

dashboard.contextTypes = {
  store: PropTypes.object.isRequired
};
export default dashboard;
