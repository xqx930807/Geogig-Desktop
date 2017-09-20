import React from 'react'

import { Checkbox, Popover, Tooltip, Position, Menu, MenuItem } from "@blueprintjs/core";

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
              <Checkbox className="pt-large"></Checkbox>
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
      <MenuItem iconName="new-text-box" onClick={this.handleClick} text="View"/>
      <MenuItem iconName="new-object" onClick={this.handleClick} text="Revert"/>
  </Menu>
);

export default RepositoryHistory;
