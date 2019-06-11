import React, { Component } from 'react';
import {
    Col,
    Container,
    Row
} from "reactstrap";
import "./test.css"

class MainHeader extends Component {
    render() {
        return (
            <header id="header">
                <Container>
                    <Row >
                        <Col md="3" sm="12" xs="12" >
                            <img src="./image/logoBridgeBank.png" alt="BBG" />
                        </Col>
                        <Col md="9" sm="12" xs="12">
                            <h1 id="navBarText"><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> Dashboard EFFOP<small> outil de mesure de l'efficacite operationnelle</small></h1>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }
}
export default MainHeader;