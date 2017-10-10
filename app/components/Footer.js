import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import './../src/assets/css/Footer.css'
const Footer = () => (
  <div className="footer-container">
    {'© Geogig App 2017. '}
    {' Made with '}
    <span className="text-red">♥</span>
    {' by '}
    <Link href="https://github.com/jlanio">JLânio </Link>
  </div>
)

export default Footer
