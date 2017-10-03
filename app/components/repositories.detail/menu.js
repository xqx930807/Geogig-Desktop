import React from 'react'
import DialogComp from './modal_dialog'
import map from './map'

const MenuRepositoryActions = (props) => (
  <ul className="pt-menu pt-elevation-1">
    <li className="pt-menu-header"><h6>Actions</h6></li>
    <DialogComp repoName={props.repoName}/>
    <li><button type="button" className="pt-menu-item pt-icon-git-branch">Show Branch</button></li>
    <li><button type="button" className="pt-menu-item pt-icon-exchange" onClick={map}>Check Changes</button></li>
    <li className="pt-menu-header"><h6>Views</h6></li>
    <li><button type="button" className="pt-menu-item pt-icon-history">History</button></li>
  </ul>
);

const MenuRepository = () => (
  <div className="pt-button-group pt-minimal ">
    <a className="pt-button pt-icon-git-new-branch" role="button"></a>
    <a className="pt-button pt-icon-git-push" role="button"></a>
    <a className="pt-button pt-icon-git-pull" role="button"></a>
  </div>
)

export {MenuRepository, MenuRepositoryActions};
