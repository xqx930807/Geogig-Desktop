import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Navbar from '../components/ui/Navbar';
import PropTypes from 'prop-types';
import api from '../api/geogig-js';
import {Checkbox, Popover, Tooltip, Position, Tabs2, Tab2 } from "@blueprintjs/core";


class dashboard extends Component {
  constructor(props){
   super(props);
     this.state = {
       details: [
         undefined,
         {
           response: {
               commit: []
           }
         }
       ],
       existGeopackage: true
    }
  }
  componentDidMount(){
      this.context.store.dispatch(api.detailRepo(this.props.match.params.name));
  }

  componentWillMount(){
    this.context.store.subscribe(() => {
      let getStateREPOS = this.context.store.getState();
      this.setState(getStateREPOS);
    })
  }

    render(){
      const CheckGeopackage = () => {
        if (this.state.existGeopackage){
          return (null)
        }else{
          return (<div><div className="pt-callout pt-intent-danger">
            <h5>Attention!<br/>
              Geopacake output has not yet been configured for this repository
            </h5>
            <label className="pt-file-upload pt-fill">
              <input type="file"/>
              <span className="pt-file-upload-input">Choose file...</span>
            </label>
          </div><hr/></div>)
        }
      }
      return(
        <div>
          <Grid fluid={true}>
            <Row className="show-grid"><Navbar/></Row>
              <br/>
              <Row  className="show-grid">
                <Col md={2}>
                  <MenuRepositoriesDetail />
                </Col>
                <Col md={9}>
                  <CheckGeopackage/>
                    <Tabs2 id="Tabs2Example" >
                      <Tab2 id="rx" title="History" panel={<RepositoryHistory data={this.state.details[1].response.commit}/>} />
                      <Tab2 id="ng" title="Changes" panel={<RepositoryChanges data={'Ola Mundo'}/>} />
                    </Tabs2>

                </Col>
            </Row>
          </Grid>
        </div>
      )
    }
}

const MenuRepositoriesDetail = () => (
    <ul className="pt-menu pt-elevation-1">
      <li className="pt-menu-header"><h6>Actions</h6></li>
      <li><button type="button" className="pt-menu-item pt-icon-layout-auto">New Commit</button></li>
      <li><button type="button" className="pt-menu-item pt-icon-layout-circle">Circle</button></li>
      <li><button type="button" className="pt-menu-item pt-icon-layout-grid">Grid</button></li>
      <li className="pt-menu-header"><h6>Views</h6></li>
      <li><button type="button" className="pt-menu-item pt-icon-history">History</button></li>
      <li><button type="button" className="pt-menu-item pt-icon-star">Favorites</button></li>
      <li><button type="button" className="pt-menu-item pt-icon-envelope">Messages</button></li>
    </ul>
);

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
          </tr>
        )
      }
    </tbody>
  </table>
);
const RepositoryChanges = (props) => (<h1>{props.data}</h1>)
dashboard.contextTypes = {
  store: PropTypes.object.isRequired
};

export default dashboard;
