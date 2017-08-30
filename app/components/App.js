import React, { Component } from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import PropTypes from 'prop-types';
import Navbar from './ui/Navbar.js'
import Tab2 from './ui/Tab2.js'

import '../src/assets/css/App.css';
import api from '../Api/localApi';

class App extends Component {

  componentDidMount(){
    this.context.store.dispatch(api.loadLocal());
  }
  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row className="show-grid"><Navbar/></Row>
            <Row  className="show-grid"> </Row>
            <br></br>
            <Tab2/>
        </Grid>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
};
export default App;
