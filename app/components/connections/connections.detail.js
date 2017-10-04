import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Navbar from '../ui/Navbar'
import Tree from '../repositories.detail/geopackage.tree'
import RepositoryHistory from '../repositories.detail/table.commit'
import {MenuRepository, MenuRepositoryActions}  from '../repositories.detail/menu'
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import api from '../../services/api/geogig-js';

import { Tab2, Tabs2 } from "@blueprintjs/core";

class connectionsDetail extends Component {
  constructor(props){
   super(props);
   this.state = {
     repos:{repo:[]}
   };
  }

  componentDidMount() {
    let uri = JSON.parse(this.props.match.params.name).type
    const apic = new api('http://'+uri);
    this.context.store.dispatch(apic.loadLocal());


  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState(this.context.store.getState())
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
              <Tab2 id="rx" title="External Connect" panel={<Local data={this.state} />} />
                <Tabs2.Expander />
            </Tabs2>
          </div>
        </Grid>
      </div>
    );
  }
}
const  clone = (name, uri) => {
  const apic = new api();
  apic.cloneRepository(name, uri)
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
                <Link to={{pathname:`/remote/{"name":"${e.name}", "type": "${e.type}:8182"}`}}>
                  {e.name}
                </Link>
              </td>
              <td>{e.href}</td>
              <td><span onClick={() =>  clone(e.name + '.remote', e.href.replace('.json',''))} className="pt-icon-standard pt-icon-import"></span></td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
);
const RepositoryChanges = (props) => (<h1>{props.data}</h1>)
connectionsDetail.contextTypes = {
  store: PropTypes.object.isRequired
};

export default connectionsDetail;
