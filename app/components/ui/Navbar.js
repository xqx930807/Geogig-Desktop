import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Popover, Menu, MenuItem, Position, MenuDivider } from "@blueprintjs/core";

import os from 'os'
let interfaces = os.networkInterfaces();
let addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address+':8182');
    }
  }
}

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="pt-navbar pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <Link to={`/`} >
              <button className="pt-button pt-minimal pt-icon-control">Dasboard</button>
            </Link>
            <span className="pt-navbar-divider"></span>
            <Link to={`/repositories`} >
              <button className="pt-button pt-minimal pt-icon-git-repo">Repositories</button>
            </Link>
            <Link to={`/connections`} >
              <button className="pt-button pt-minimal pt-icon-database">Connections</button>
            </Link>
          </div>
          <div className="pt-navbar-group pt-align-right">
              <span className="pt-navbar-divider"></span>
              <button className="pt-button pt-minimal pt-icon-cell-tower">{addresses[0]}</button>
            <Popover position={Position.BOTTOM_RIGHT} content={<Menu>
                <MenuItem iconName="new-text-box" onClick={this.handleClick} text="New text box" />
                <MenuItem iconName="new-object" onClick={this.handleClick} text="New object" />
                <MenuItem iconName="new-link" onClick={this.handleClick} text="New link" />
                <MenuDivider />
                <Link to={`/config`} >
                  <MenuItem text="Settings..." iconName="cog" />
                </Link>

            </Menu>} target={<button className="pt-button pt-minimal pt-icon-cog"></button>} />

        </div>
        </nav>
      </div>
    );
  }
}
 const Spinner = () => (
   <div className="pt-spinner pt-small">
     <div className="pt-spinner-svg-container">
       <svg viewBox="0 0 100 100">
         <path className="pt-spinner-track" d="M 50,50 m 0,-44.5 a 44.5,44.5 0 1 1 0,89 a 44.5,44.5 0 1 1 0,-89"></path>
         <path className="pt-spinner-head" d="M 94.5 50 A 44.5 44.5 0 0 0 50 5.5"></path>
       </svg>
     </div>
   </div>
 );

export default Navbar;
