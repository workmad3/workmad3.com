import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

export default class Application extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md='12'>
            {this.props.children}
          </Col>
        </Row>
      </Grid>
    )
  }
}
