import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {
  DocumentCard, DocumentCardActivity, DocumentCardPreview,
  DocumentCardTitle, IDocumentCardPreviewProps, DocumentCardType
} from 'office-ui-fabric-react/lib/DocumentCard';
import STORE from './../reducers/store'

class Repository extends Component {
  constructor(props){
    super(props);
    this.subscribe = STORE.subscribe.bind(this)
    this.dispatch = STORE.dispatch.bind(this)
  }

  componentDidMount(){
    this.subscribe()
  }
  selectRepo(){
    this.dispatch( dispatch => dispatch({type:'SHOWPANEL', showPanel: true}));
  }
  render() {
    return(
    <div>
      {
        this.props.data.repos.repo.map(repo =>
          <div key={repo.name}>
            <DocumentCard  type={ DocumentCardType.compact }  onClick ={this.selectRepo.bind(this)}>
              <DocumentCardPreview { ...previewPropsUsingIcon } />
              <div className='ms-DocumentCard-details'>
                <DocumentCardTitle title={repo.name} shouldTruncate={ true } />
                <DocumentCardActivity activity={repo.href} people={[{name:'Local'}]} />
              </div>
            </DocumentCard>
          </div>
        )
      }
    </div>
    );
  }
}

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
Repository.contextTypes = {
  store: PropTypes.object.isRequired
};
export default Repository
