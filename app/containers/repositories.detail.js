import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Navbar from '../components/ui/Navbar'
import Tree from '../components/repositories.detail/geopackage.tree'
import RepositoryHistory from '../components/repositories.detail/table.commit'
import {MenuRepository, MenuRepositoryActions}  from '../components/repositories.detail/menu'

import PropTypes from 'prop-types';
import api from '../services/api/geogig-js';

class dashboard extends Component {
  constructor(props){
   super(props);
    this.state = {
       details: [
         {node: []},
         {commit: []}
       ],
       existGeopackage: true
    }
  }

  componentDidMount() {
    let uri = JSON.parse(this.props.match.params.name).type
    if (typeof(uri) === 'undefined'){
      const apic = new api();
      this.context.store.dispatch(apic.detailRepo(JSON.parse(this.props.match.params.name).name));
    }else{
      const apic = new api('http://'+uri);
      this.context.store.dispatch(apic.detailRepo(JSON.parse(this.props.match.params.name).name));
    }

  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState(this.context.store.getState())
    })
  }

  render(){
    return(
      <div>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Navbar/>
          </Row>
          <br/>
          <Row  className="show-grid">
            <Col sm={6} md={3} >
              <MenuRepositoryActions repoName={this.props.match.params.name}/>
              <br/>
              <Tree data={this.state.details[0].node} repoName={this.props.match.params.name} />
            </Col>
            <Col sm={6} md={9} >
              <MenuRepository />
              <RepositoryHistory data={this.state.details[1].commit} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

const RepositoryChanges = (props) => (<h1>{props.data}</h1>)
dashboard.contextTypes = {
  store: PropTypes.object.isRequired
};

export default dashboard;
