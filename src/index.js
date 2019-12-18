import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch, Redirect
} from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  // CardHeader,
  // CardBody,
  // Card
}
  from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/main.css";
import TauxDactivite from './components/mainContent/TauxDactivite.jsx';
// import ChargePoidsEmplois from './components/mainContent/ChargePoidsEmplois';
// import ChargePoidsTacheMetier from './components/mainContent/ChargePoidsTacheMetier';
// import ChargePoidsTacheProcessus from './components/mainContent/ChargePoidsTacheProcessus';
import ChargePoidsProcessus from './components/mainContent/ChargePoidsProcessus';
import ParametreTab from './components/mainContent/ParametreTab';
//import DoughnutChart from './components/chartAsset/DoughnutChart';
//import { createBrowserHistory } from "history";
// import indexRoutes from "./route/index.jsx";
function hello() {
  return (<React.Fragment>

<Row>
    
      
    <Col md={{ size: 12, order: 0, offset: 0 }}>
      <h1>Bienvenu sur votre application </h1>
    </Col>
    &nbsp;
    <Col md={{ size: 12, order: 0, offset: 0 }}>
      <h3>Vu d'ensemble mois précedent</h3>
    </Col>
     
     &nbsp;
    {/* <Col md={{ size: 6, order: 0, offset: 0 }}>
    <Card>
    <CardHeader>Taux d'activité</CardHeader>
    <CardBody>
      <DoughnutChart />
      </CardBody>
    </Card> 
    </Col> */}
    
  </Row>
    <Row>
      <Col md={{ size: 4, order: 0, offset: 0 }}>
      <div className="overviewcard colorOBBG">INDICATEUR PERTINANT 1</div>
          </Col>
          <Col md={{ size: 4, order: 0, offset: 0 }}>
      <div className="overviewcard colorBLUE "> INDICATEUR PERTINANT 2</div>
          </Col>
          <Col md={{ size: 4, order: 0, offset: 0 }}>
      <div className="overviewcard colorGREEN"> INDICATEUR PERTINANT 3</div>
          </Col>
      {/* <Col md={{ size: 6, order: 0, offset: 0 }}>
      <Card>
      <CardHeader>Taux d'activité</CardHeader>
      <CardBody>
        <DoughnutChart />
        </CardBody>
      </Card> 
      </Col> */}
      
    </Row>

    

  </React.Fragment>)

}
const Notfound = () => <h1>Page en construction</h1>

const routing = (
  <Router>
    <App />
    <Row>
      <Col md={{ size: 2, order: 0, offset: 0 }}>
        <ListGroup >
          <ListGroupItem className="menuHeader" >
            MENU GENERAL
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/Accueil">Accueil</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/TauxDactivite" >Taux d'activité mensuel</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/ChargePoidsEmplois">Charges et poids par emplois</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/ChargePoidsProcessus">Charge et poids par processus</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/ChargePoidsTacheProcessus">Charge et poids par tache et par processus</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/ChargerPoidsMetier">Charge et poids par tache et par metier</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/les20tachesLourdes">Les 20 tâches les plus lourdes</NavLink>
          </ListGroupItem>
          <ListGroupItem action>
            <NavLink exact activeClassName="activeNav" to="/ParametreTab">Parametrage système</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="8">
        <Switch>
          <Route path="/ParametreTab" component={ParametreTab} />
          <Route path="/TauxDactivite" component={TauxDactivite} />
          <Route path="/Accueil" component={hello} />
          <Route exact path="/" render={() => (<Redirect to="/Accueil" />)} />
          <Route path="/ChargePoidsProcessus" component={ChargePoidsProcessus} />
          <Route path="/ChargePoidsTacheProcessus" component={Notfound}/>
          <Route path="/les20tachesLourdes" component={Notfound} />
          <Route component={Notfound} />
        </Switch>
      </Col>
    </Row>
  </Router>)

ReactDOM.render(routing, document.getElementById('root'));