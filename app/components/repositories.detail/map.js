import React, { Component } from 'react';


class DialogComp extends Component {
  constructor(props){
    super(props);
      this.state = {
        isOpen: false
      };
      this.toggleDialog = this.toggleDialog.bind(this);

  }
  toggleDialog(e) {
    this.setState({isOpen: e.target.value});
  }
  render(){
    return (
      <div>
       <Button onClick={this.toggleDialog} text="Show dialog" />
       <Dialog
           iconName="inbox"
           isOpen={this.state.isOpen}
           onClose={this.toggleDialog}
           title="Dialog header"
       >
           <div className="pt-dialog-body">
               Some content
           </div>
           <div className="pt-dialog-footer">
               <div className="pt-dialog-footer-actions">
                   <Button text="Secondary" />
                   <Button
                       intent={Intent.PRIMARY}
                       onClick={this.toggleDialog}
                       text="Primary"
                   />
               </div>
           </div>
       </Dialog>
   </div>
    )
  }
}
