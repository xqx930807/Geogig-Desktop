import React from  'react';
import api from '../../services/api/geogig-js';
const {dialog} = require('electron').remote;

const importGeopakage = (props) => {
  dialog.showOpenDialog(
		{
      defaultPath: 'c:/',
      filters: [
        { name: 'Shapefile', extensions: ['gpkg'] }
      ],
			properties: ['openFile']
		},
    fileName => {
      api.beginTransaction('imovel')
    }
  )
}
export default (props) => (
<div className="pt-tree pt-elevation-0">
  <ul className="pt-tree-node-list pt-tree-root">
    <li className="pt-tree-node pt-tree-node-expanded">
      <div className="pt-tree-node-content">
        <span className="pt-tree-node-caret pt-tree-node-caret-open pt-icon-standard"></span>
        <span className="pt-tree-node-icon pt-icon-standard pt-icon-layers"></span>
        <span className="pt-tree-node-label">Geopacake</span>
        <span onClick={importGeopakage} className="pt-tree-node-secondary-label pt-icon-add pt-icon-standard"></span>
      </div>
      <ul className="pt-tree-node-list">
        { props.data.map(e =>
          <li  key={e.path} className="pt-tree-node">
            <div className="pt-tree-node-content">
              <span className="pt-tree-node-caret-none pt-icon-standard"></span>
              <span className="pt-tree-node-icon pt-icon-standard pt-icon-document"></span>
              <span className="pt-tree-node-label">{e.path}</span>
            </div>
          </li>
        )}
      </ul>
    </li>
  </ul>
</div>
)
