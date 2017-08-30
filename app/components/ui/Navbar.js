import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
              <button className="pt-button pt-minimal pt-icon-box">Repositories</button>
            </Link>
            <Link to={`/connections`} >
              <button className="pt-button pt-minimal pt-icon-database">Connections</button>
            </Link>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <button className="pt-button pt-minimal pt-icon-notifications"></button>
            <button className="pt-button pt-minimal pt-icon-cog"></button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
