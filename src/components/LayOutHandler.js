import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem, CardBody,ListGroupItemHeading, Card,CardHeader ,CardTitle, CardText, Button } from "reactstrap";
import Modal from "./Modal";
import "./test.css"

class LayOutHandler extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <ListGroup >
              <ListGroupItem className='test' href="#">Cras justo odio</ListGroupItem>
              <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
              <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="9">
            <Card>
              <CardHeader>Header</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
                With supporting text below as a natural lead-in to additional content.
            
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: "auto", offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row> */}
      </Container>
    );
  }
}
export default LayOutHandler;
