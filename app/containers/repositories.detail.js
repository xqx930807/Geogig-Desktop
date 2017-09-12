import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Navbar from '../components/ui/Navbar';
import Tree from '../components/repositories.detail/geopackage.tree';
import {MenuRepository, MenuRepositoryActions}  from '../components/repositories.detail/menu';

import PropTypes from 'prop-types';
import api from '../services/api/geogig-js';
import {Checkbox, Popover, Tooltip, Position,
Tabs2, Tab2, Menu, MenuItem, MenuDivider, Toaster  } from "@blueprintjs/core";

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
  componentDidMount(){
    this.context.store.dispatch(api.detailRepo(this.props.match.params.name));
  }

  componentWillMount(){
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
              <MenuRepositoryActions/>
              <br/>
              <Tree data={this.state.details[0].node} repoName={this.props.match.params.name} />
            </Col>
            <Col sm={6} md={9} >
              <MenuRepository />
              <RepositoryHistory data={this.state.details[1].commit}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}



const RepositoryHistory = (props) => (
  <table className="pt-table pt-interactive pt-elevation-1">
    <thead>
      <tr>
        <th></th>
        <th>id</th>
        <th>author</th>
        <th>adds</th>
        <th>removes</th>
        <th>modifies</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {
        props.data.map(e =>

          <tr key={e.id}>
            <td>
              <Checkbox className="pt-large">

              </Checkbox>
              </td>
            <td>

                <Tooltip content={e.id} position={Position.RIGHT}>
                  <h5><i>...{e.id.slice(-5)}</i></h5>
                </Tooltip>
            </td>
            <td>{e.committer.name}</td>
            <td>{e.adds}</td>
            <td>{e.removes}</td>
            <td>{e.modifies}</td>
            <td><Popover position={Position.LEFT} content={<Content />} target={<button className="pt-button pt-minimal pt-icon-cog"></button>} /></td>
          </tr>
        )
      }
    </tbody>
  </table>
);
const Content = () => (
  <Menu>
      <MenuItem
          iconName="new-text-box"
          onClick={this.handleClick}
          text="View"
      />
      <MenuItem
          iconName="new-object"
          onClick={this.handleClick}
          text="Revert"
      />
  </Menu>
 )
const RepositoryChanges = (props) => (<h1>{props.data}</h1>)
dashboard.contextTypes = {
  store: PropTypes.object.isRequired
};

export default dashboard;
