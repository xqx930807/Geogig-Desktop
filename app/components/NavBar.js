import React, {Component} from 'react'
import './../src/assets/css/NavBar.css'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { menuItems, farMenuItems } from './items'



class NavBar extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = { isContextMenuShown: false };
  }
  render(){
    return(
      <div className="NavBar">
        <div className="logo ms-font-xl">
          <strong> APP</strong>
        </div>
      </div>
    )
  }
}
export default NavBar
