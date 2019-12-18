import React from 'react';
import { 
    TabContent, 
    TabPane, 
    Nav, 
    NavItem, 
    NavLink, 
    Card, 
    //Button, 
    CardTitle, 
    CardBody, 
    //CardHeader, 
    CardText, 
    Row, 
    Col } from 'reactstrap';
import classnames from 'classnames';

import EnrgMarcheModal from '../modalParametre/EnrgMarcheModal';
import EnrgOperationModal from '../modalParametre/EnrgOperationModal';
import EnrgProcessusModal from '../modalParametre/EnrgProcessusModal';
import EnrgOperationMan from '../modalParametre/EnrgOperationMan';
import EnrgTachModal from '../modalParametre/EnrgTachModal';
import Tableau from '../modalParametre/tableau/TableauMarche';
import TableauTache from '../modalParametre/tableau/TableauTache';
import TableauOperation from '../modalParametre/tableau/TableauOperation';
import CsvHandler from '../csvAsset/CsvHandler';
export default class ParametreTab extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',
            dataJson:[]
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    componentDidMount()
  {
     const reponse=fetch(`http://localhost:8089/api/effop/getTache`,
    {
      method: 'GET',
      headers:
      {
        'Content-Type': 'application/json',
      },
      
    }).then(res => res.json())
     .then(json => {this.setState({ dataJson: json })
    });

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
                                <a href='#' className={ this.state.activeTab === '1' ? "activeNav" : "none" }> Parametrage tâches<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                <a href='#' className={ this.state.activeTab === '2' ? "activeNav" : "none" }>Parametrage marché<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                <a href='#' className={ this.state.activeTab === '3' ? "activeNav" : "none" }>Parametrage opération<br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                                <a href='#' className={ this.state.activeTab === '4' ? "activeNav" : "none" }>Parametrage procéssus <br/>&nbsp;</a>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '5' })}
                                onClick={() => { this.toggle('5'); }}
                            >
                                <a href='#' className={ this.state.activeTab === '5' ? "activeNav" : "none" }>Parametrage volume <br/> opération manuelle</a>
                            </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '6' })}
                                onClick={() => { this.toggle('6'); }}
                            >
                                <a href='#' className={ this.state.activeTab === '6' ? "activeNav" : "none" }>Effectif des métiers<br/><br/></a>
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
                                        <EnrgMarcheModal buttonLabel="Enregistrer un marché"/>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
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
                                        <EnrgOperationModal buttonLabel="Enregistrer une opération"/>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauOperation/>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="4">
                                <Row>
                                <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Enregistrer processus</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour enregistrer une nouvelle tâche</CardText>
                                        <EnrgProcessusModal buttonLabel="Enregistrer une tâche"/>
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
                                        <EnrgOperationMan buttonLabel="Renseigner un volume manuel"/>
                                        &nbsp;
                                        <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="6">
                                <Row>
                                <Col md="12" sm="6">
                                        &nbsp;
                                        <CardTitle>Renseignement activité mensuelle des employés (Jours travaillé)</CardTitle>
                                        <CardText>Cliquer sur ce boutton pour charger le fichier csv</CardText>
                                        {/* <EnrgOperationMan buttonLabel="Renseigner un volume manuel"/> */}
                                        &nbsp;
                                        <CsvHandler/>
                                        {/* <Dropzone/> */}
                                        {/* <CardTitle>Tâches enregistrées</CardTitle>
                                        <TableauTache></TableauTache> */}
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