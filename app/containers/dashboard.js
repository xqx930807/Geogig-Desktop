import React from 'react';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Navbar from '../components/ui/Navbar';

const dashboard = () => (
  <div>
    <Navbar/>
      <Grid fluid={true}>
        <br></br>
        <Row className="show-grid">
            <Col sm={6} md={3} >
              <div className="pt-card pt-elevation-1 pt-interactive">
                <h5><a href="#">Desk Profile</a></h5>
                <p>Desk-level summary of trading activity and trading profiles.</p>
              </div>
            </Col>
            <Col sm={6} md={3} ><div className="pt-card pt-elevation-0 pt-interactive">
              <h5><a href="#">Trader Profile</a></h5>
              <p>Overview of employee activity, including risk model, scores and scenario alert history.</p>
            </div></Col>
            <Col sm={6} md={3} ><div className="pt-card pt-elevation-2 pt-interactive">
              <h5><a href="#">Dataset Dashboards</a></h5>
              <p>Stats of dataset completeness and reference data join percentages.</p>
            </div></Col>
        </Row>
      </Grid>
  </div>
);

export default dashboard;
