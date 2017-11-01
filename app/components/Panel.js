import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import STORE from './../reducers/store'

class PanelMediumExample extends Component {

  constructor(props) {
    super(props);
    this.subscribe = STORE.subscribe.bind(this)
    this.state = {
      showPanel: false
    };
  }

  set STORE_dispatch (data) { this.context.store.dispatch(data) }
  STORE_subscribe () {
    this.context.store.subscribe( () => {
      this.setState(this.context.store.getState())
    })
  }

  componentDidMount(){
    this.subscribe()
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps);
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

PanelMediumExample.contextTypes = {
  store: PropTypes.object.isRequired
};
export default PanelMediumExample
