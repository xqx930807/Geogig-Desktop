import React, {Component} from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

class PanelMediumExample extends Component {

  constructor(props) {
    super(props);
    this.state = {showPanel: true};
  }

  _setShowPanel(){
    this.setState({showPanel: !this.state.showPanel});
  }
  render() {
    return (
      <div>
        <Panel
          isOpen={ this.state.showPanel }
          onDismiss={() => console.log('quando fechar, executar...')}
          type={ PanelType.medium }
          headerText='Medium Panel'
        >
          <span>Content goes here.</span>
        </Panel>
      </div>
    );
  }

}
export default PanelMediumExample
