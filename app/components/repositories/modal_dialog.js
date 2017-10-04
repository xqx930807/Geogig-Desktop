import React, { Component } from 'react';
import { Button , Dialog, Intent }  from "@blueprintjs/core";
import api from '../../services/api/geogig-js';

class DialogComp extends Component {
  constructor(props){
    super(props);
      this.state = {
        isOpen: false,
        value: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.api = new api();
    }
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  render(){
    return (
      <div>
        <li>
          <button type="button" className="pt-button pt-intent-success pt-icon-add " onClick={() =>  this.setState({ isOpen: !this.state.isOpen })}>New Repository</button>
        </li>
        <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={() =>  this.setState({ isOpen: !this.state.isOpen })} title="New Commit">
          <div className="pt-dialog-body">
            <label className="pt-label">
              <span className="pt-text-muted">New repository</span>
              <input className="pt-input pt-large" value={this.state.value} onChange={this.handleChange}/>
            </label>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button intent={Intent.PRIMARY}  onClick={ () => {
                  this.api.newRepository(this.state.value)
                }} text="Commit"/>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}


export default DialogComp;
