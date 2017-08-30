import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="pt-navbar pt-dark">
          <div className="pt-navbar-group pt-align-left">
            <button className="pt-button pt-minimal pt-icon-control">Dasboard</button>
            <span className="pt-navbar-divider"></span>
            <button className="pt-button pt-minimal pt-icon-box">Repositories</button>
              <button className="pt-button pt-minimal pt-icon-database">Connections</button>
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
