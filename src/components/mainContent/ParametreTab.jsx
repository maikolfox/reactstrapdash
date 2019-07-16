import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardBody, CardHeader, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import EnrgMarcheModal from '../modalParametre/EnrgMarcheModal';
import EnrgTachModal from '../modalParametre/EnrgTachModal';
import Tableau from '../modalParametre/tableau/TableauMarche';
import TableauTache from '../modalParametre/tableau/TableauTache';



export default class ParametreTab extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Card>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <a href='#'> Parametrage tâches<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <a href='#'>Parametrage marché<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                <a href='#'>Parametrage opération<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                                <a href='#'>Parametrage procéssus <br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }}
                            >
                                <a href='#'>Parametrage volume <br/> opération manuelle</a>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <CardBody>
                        <TabContent md='12' activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Enregistrer une tâche</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour enregistrer une nouvelle tâche</CardText>
                                        <EnrgTachModal buttonLabel="Enregistrer une tâche"></EnrgTachModal>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Enregistré un marché</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour enregistrer un marché</CardText>
                                        <EnrgMarcheModal buttonLabel="Enregistrer un marché"></EnrgMarcheModal>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        &nbsp;
                                        <Tableau></Tableau>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Enregistrer opération</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour enregistrer une nouvelle tâche</CardText>
                                        <EnrgTachModal buttonLabel="Enregistrer une tâche"></EnrgTachModal>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Enregistrer processus</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour enregistrer une nouvelle tâche</CardText>
                                        <EnrgTachModal buttonLabel="Enregistrer une tâche"></EnrgTachModal>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="5">
                                <Row>
                                <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Renseignement des volumes d'operations manuelle</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour renseigner un volume</CardText>
                                        <EnrgTachModal buttonLabel="Renseigner un volume"></EnrgTachModal>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </CardBody>
                </Card>
            </React.Fragment>
        );
    }
}