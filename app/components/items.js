import React from 'react'
import { Link } from 'react-router-dom'

const identity = () => {}

export const menuItems = [
  {
    key: 'Dashboard',
    name: <Link to="/" style={{ textDecoration: 'none', color: '#000000'  }}>Dashboard</Link>,
    icon: 'ViewDashboard'
  }, {
    key: 'Local',
    name: <Link to="/local" style={{ textDecoration: 'none', color: '#000000'  }}>Local</Link>,
    icon: 'HardDriveGroup'
  }, {
    key: 'Database',
    name: <Link to="/remote" style={{ textDecoration: 'none', color: '#000000'  }}>Database</Link>,
    icon: 'Database'
  }
]

export const farMenuItems = [{
  key: 'New',
  name: 'New',
  icon: 'CirclePlus',
  subMenuProps: {
    items: [
      {
        key: 'repositoryLocal',
        name: 'Repository Local',
        icon: 'BoxAdditionSolid',
        ['data-automation-id']: 'BoxAdditionSolid'
      },
      {
        key: 'ConexaoRemote',
        name: 'Connect Remote',
        icon: 'CloudAdd',
        ['data-automation-id']: 'CloudAdd'
      }
    ],
  }
}
]
