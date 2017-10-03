import React, {Component} from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import { Button, Intent }  from "@blueprintjs/core";
import Navbar from '../components/ui/Navbar';
const {dialog} = require('electron').remote;

class dashboard extends Component {
  constructor(props){
    super(props);
      this.state = {
        config: JSON.parse(localStorage.getItem('config'))
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e) {
      console.log(this.state.config);
      let labelName = e.target.name;
      let labelValue = e.target.value;
      this.setState({config:{[labelName]: labelValue}});

    }
  render(){
    return(
      <div>
        <Grid fluid={true}>
          <Row className="show-grid"><Navbar/></Row>
          <Row  className="show-grid"></Row>
          <br></br>
          <div className="pt-card pt-elevation-2">
            <h1 onClick={importGeopakage}>asdasd</h1>
              <span className="pt-text-muted">E-mail</span>
              <input className="pt-input" name="email" value={this.state.config.email} onChange={this.handleInputChange}/>
              <br></br>
              <span className="pt-text-muted">Name</span>
              <input className="pt-input" name="name" value={this.state.config.Name} onChange={this.handleInputChange}/>
              <br></br>
                <Button intent={Intent.PRIMARY} onClick={ () => {
                    localStorage.setItem('config', JSON.stringify(this.state.config))
                }} text="Commit"/>
        </div>
        </Grid>
      </div>
    )
  }
}
const importGeopakage = () => {

  dialog.showOpenDialog(
    {
      defaultPath: 'c:/',
       properties: ['openDirectory']
    },
    fileName => {
      localStorage.setItem('config', `{"dir":"${fileName[0].replace(/\\/g, "\\\\")}"}`);
    }
  )
}

export default dashboard;
