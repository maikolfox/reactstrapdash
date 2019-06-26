import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch
} from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,

}
  from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/css/main.css";
import TauxDactivite from './components/mainContent/TauxDactivite.jsx';
import ParametreTab from './components/mainContent/ParametreTab';
// import ChargePoidsEmplois from './components/mainContent/ChargePoidsEmplois';
// import ChargePoidsTacheMetier from './components/mainContent/ChargePoidsTacheMetier';
// import ChargePoidsTacheProcessus from './components/mainContent/ChargePoidsTacheProcessus';
import ChargePoidsProcessus from './components/mainContent/ChargePoidsProcessus';
import classnames from 'classnames';

//import { createBrowserHistory } from "history";
// import indexRoutes from "./route/index.jsx";
function hello() {
  return (<h1>Bienvenu sur votre application</h1>)

}
const Notfound = () => <h1>Page en construction</h1>



const routing = (

  <Router>
    <App />
    <Row>
      <Col md={{ size: 3, order: 0, offset: 0 }}>
        <ListGroup >

          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/">Acceuil</NavLink>
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/TauxDactivite">Taux d'activité mensuel</NavLink>
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/ChargePoidsEmplois">Charges et poids par emplois</NavLink>
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/ChargePoidsProcessus">Charge et poids par tache et par processus</NavLink>
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/ChargerPoidsMetier">Charge et poids par tache et par metier</NavLink>
          </ListGroupItem>
          <ListGroupItem >
            <NavLink exact activeClassName="activeNav" to="/ParametreTab">Parametrage système</NavLink>
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md="9">
        <Switch>
          <Route path="/ParametreTab" component={ParametreTab} />
          <Route exact path="/TauxDactivite" component={TauxDactivite} />
          <Route exact path="/" component={hello} />
          <Route path="/ChargePoidsProcessus" component={ChargePoidsProcessus} />
          <Route component={Notfound} />
        </Switch>
      </Col>
    </Row>
  </Router>)

ReactDOM.render(routing, document.getElementById('root'));