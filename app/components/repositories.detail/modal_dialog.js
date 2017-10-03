import React, { Component } from 'react';
import { Button , Dialog, Intent }  from "@blueprintjs/core";

import api from '../../services/api/geogig-js';

class DialogComp extends Component {
  constructor(props){
    super(props);
      this.state = {
        isOpen: false,
        value: '',
        activeLocal: localStorage.getItem(localStorage.getItem('repoActive'))
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  render(){
    return (
      <div>
        <li><button type="button" className="pt-menu-item pt-icon-git-commit" onClick={() =>  this.setState({ isOpen: !this.state.isOpen })}>New Commit</button></li>
        <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={() =>  this.setState({ isOpen: !this.state.isOpen })} title="New Commit">
          <div className="pt-dialog-body">
            <label className="pt-label">
              <span className="pt-text-muted">msg Commit</span>
              <input className="pt-input pt-large" value={this.state.value} onChange={this.handleChange}/>
            </label>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button intent={Intent.PRIMARY}  onClick={ () => {
                  api.beginTransaction(this.props.repoName, this.state.value, this.state.activeLocal)
                  this.setState({ isOpen: !this.state.isOpen });
                }} text="Commit"/>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}


export default DialogComp;
