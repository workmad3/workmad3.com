import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import Topbar from 'components/topbar';

export default class Application extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Topbar />
        <Row>
          <Col md={12}>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}
