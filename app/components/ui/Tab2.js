import React, { Component } from 'react';
import { Tab2, Tabs2 } from "@blueprintjs/core";
import PropTypes from 'prop-types';

import api from '../../Api/localApi';

class Tab2Comp extends Component {
  constructor(props){
   super(props);
   this.state = {repos:[]};
  }
  componentDidMount(){
    this.context.store.subscribe(() => {
      let getStateREPOS = this.context.store.getState();
      this.setState(getStateREPOS);
    })
  }
  render() {
    return (
      <div>
        <div className="pt-card pt-elevation-2">
          <Tabs2 id="Tabs2Example" >
            <Tab2 id="rx" title="Local" panel={<Local />} />
            <Tab2 id="ng" title="Remote" panel={<Remote />} />
              <Tabs2.Expander />
                <button type="button" className="pt-button pt-minimal pt-icon-add">New</button>
          </Tabs2>
        </div>
      </div>
    );
  }
}
const Local: React.SFC<{}> = () => (
  <div>
    <table className="pt-table pt-interactive">
      <thead>
        <tr>
          <th>Name</th>
          <th>Adress</th>
          <th>Trash</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Blueprint</td>
          <td></td>
          <td><div className="pt-tag ">Done</div></td>
        </tr>
      </tbody>
    </table>
  </div>
);

const Remote: React.SFC<{}> = () => (
  <div>
    <br></br>
    <div className="pt-callout .modifier">
      <h5>Callout Heading</h5>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
    </div>
  </div>
);
Tab2Comp.contextTypes = {
  store: PropTypes.object.isRequired
};

export default Tab2Comp;
