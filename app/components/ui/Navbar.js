import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Popover, Menu, MenuItem, Position, MenuDivider } from "@blueprintjs/core";

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
            <Popover position={Position.BOTTOM_RIGHT} content={<Content />} target={<button className="pt-button pt-minimal pt-icon-cog"></button>} />
            <button className="pt-button pt-minimal pt-icon-cell-tower"></button>
        </div>
        </nav>
      </div>
    );
  }
}
const Content = () => (
  <Menu>
      <MenuItem
          iconName="new-text-box"
          onClick={this.handleClick}
          text="New text box"
      />
      <MenuItem
          iconName="new-object"
          onClick={this.handleClick}
          text="New object"
      />
      <MenuItem
          iconName="new-link"
          onClick={this.handleClick}
          text="New link"
      />
      <MenuDivider />
      <MenuItem text="Settings..." iconName="cog" />
  </Menu>
 )
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
