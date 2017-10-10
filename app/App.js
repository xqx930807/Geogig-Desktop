import React from 'react';
import {Fabric} from 'office-ui-fabric-react/lib/Fabric'

import SidebarMenu from './components/SidebarMenu.js'
import {Content} from './components/Content.js'
import Footer from './components/Footer.js'
import { initializeIcons } from '@uifabric/icons';
import { Link } from 'react-router-dom'
initializeIcons()

class App extends React.Component {
  render() {
    return (
      <Fabric className="App">

          <div className="body">
            <div className="content">
              <Content />
            </div>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </Fabric>
    );
  }
}

export default App;
