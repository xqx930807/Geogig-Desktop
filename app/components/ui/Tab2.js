import React, { Component } from 'react';
import { Tab2, Tabs2 } from "@blueprintjs/core";

class Tab2Comp extends Component {
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
      <br></br>
      <div className="pt-callout .modifier">
        <h5>Callout Heading</h5>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, delectus!
      </div>
    </div>
);

const Remote: React.SFC<{}> = () => (
    <div>
      <table className="pt-table pt-interactive">
        <thead>
          <tr>
            <th>Project</th>
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
          <tr>
            <td>TSLint</td>
            <td>Static analysis linter for TypeScript</td>
            <td>TypeScript</td>
          </tr>
          <tr>
            <td>Plottable</td>
            <td>Composable charting library built on top of D3</td>
            <td><a className="pt-icon-trash"></a></td>
          </tr>
        </tbody>
      </table>
    </div>
);

export default Tab2Comp;
