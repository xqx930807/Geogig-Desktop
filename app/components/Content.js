import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { menuItems, farMenuItems } from './items'
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import {
  DocumentCard, DocumentCardActivity, DocumentCardPreview, DocumentCardTitle,
  IDocumentCardPreviewProps, DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';

import api from './../services/api/geogig-js';
import './../src/assets/css/Content.css'
import { Link } from 'react-router-dom'
let previewPropsUsingIcon: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewIconProps: { iconName: 'Archive',
            styles: { root: { fontSize: 42, color: '#000000' } }
          },
          width: 144
        }
      ]
    };
import Panel from './Panel'
class Content extends Component {
  constructor(props){
   super(props);
    this.state = {
      repos:{repo:[],remote:[]}
    };
  }

  get STORE_getState () { return this.context.store.getState() }
  set STORE_dispatch (data) {this.context.store.dispatch(data) }
  set STORE_subscribe (data) { this.context.store.subscribe(data) }

  componentDidMount(){
    let API = new api();
    this.STORE_subscribe = () => this.setState(this.STORE_getState);

    this.STORE_dispatch = API.loadLocal();
  }
  render(){
    return(
    <div>
      <Repository data={this.state} />
    </div>
)
  }
}


const Repository = (props) => (
  <div>
    <Panel/>
    {
      props.data.repos.repo.map(repo =>{
        return(
          <div key={repo.name}>
          <DocumentCard  type={ DocumentCardType.compact }>
            <DocumentCardPreview { ...previewPropsUsingIcon } />
            <div className='ms-DocumentCard-details'>
            <Link to="/remote" style={{ textDecoration: 'none', color: '#000000'  }}>
              <DocumentCardTitle
                title={repo.name}
                shouldTruncate={ true }
              />
              <DocumentCardActivity
                activity={repo.href}
                people={
                  [{ name: 'Local' }]
                }
              />
            </Link>
            </div>
          </DocumentCard>
          <p/>
          </div>
        )
      })
    }
  </div>
);

Content.contextTypes = {
  store: PropTypes.object.isRequired
};
export  {Content, Repository}
