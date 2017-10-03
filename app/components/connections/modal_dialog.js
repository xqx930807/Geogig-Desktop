import React, { Component } from 'react';
import { Button , Dialog, Intent }  from "@blueprintjs/core";
import api from '../../services/api/geogig-js';

class DialogComp extends Component {
  constructor(props){
    super(props);
      this.state = {
        postgresql: false,
        local: false,
        isOpen: false,
        name: '',
        type: '',
        checked: false,
        connected: JSON.parse(localStorage.getItem('connected'))
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
      let labelName = e.target.name;
      let labelValue = e.target.value;
      if (labelName === 'postgresql' || labelName === 'local'){
        this.setState({[labelName]: !this.state[labelName]});
      }else{
        this.setState({[labelName]: labelValue});
      }
    }

  render(){

    return (
      <div>
        <li>
          <button type="button" className="pt-button pt-intent-success pt-icon-add " onClick={() =>  this.setState({ isOpen: !this.state.isOpen })}>New Repository</button>
        </li>
        <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: !this.state.isOpen })} title="New Commit">
          <div className="pt-dialog-body">
            <input  type="checkbox"  name="local" checked={this.state.local}  onChange={this.handleInputChange} /> Local
            <input  type="checkbox"  name="postgresql" checked={this.state.postgresql}  onChange={this.handleInputChange} /> PostgreSQL
              <label className="pt-label">
                <span className="pt-text-muted">Conexao Alias</span>
                <input className="pt-input pt-large" name="name" value={this.state.value} onChange={this.handleInputChange}/>
                  <span className="pt-text-muted">IP Adress</span>
                  <input className="pt-input pt-large" name="type" value={this.state.value} onChange={this.handleInputChange}/>
              </label>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button intent={Intent.PRIMARY}
                onClick={ () => {
                  this.state.connected.in.push({'name':this.state.name, 'type':this.state.type, 'postgres':this.state.postgresql, 'local':this.state.local })
                  localStorage.setItem('connected', JSON.stringify(this.state.connected))
                }} text="Commit"/>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}


export default DialogComp;
