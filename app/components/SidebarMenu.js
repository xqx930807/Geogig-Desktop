import React from 'react'
import T from 'prop-types';
import {Nav, INavLinkGroup} from 'office-ui-fabric-react/lib/Nav'

const SidebarMenu = ({groups, expanded, collapsed}) => (
  <div className='SidebarMenu'>
    <Nav groups={groups}
      expandedStateText={expanded}
      collapsedStateText={collapsed}
    />
  </div>
)

SidebarMenu.props = {
  groups: INavLinkGroup,
  expanded: T.string,
  collapsed: T.string,
}
const identity = (event, e) => console.log(event, e);

SidebarMenu.defaultProps = {
  groups: [{
    links: [{
      name: 'Repository',
      url: '#',
      links: [{
        name: 'Local',
        url: '/about',
      }, {
        name: 'Remote',
        url: '#',
        onClick: (event, element) => {}
      }],
      isExpanded: false,
    },{
      name: 'Settings',
      url: '#',
      icon: 'Settings',
      onClick: () => {}

    }]
  }],
  expanded: 'expanded',
  collapsed: 'collapsed',
}


export default SidebarMenu
