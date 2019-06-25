import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Route, 
  BrowserRouter as Router //Switch 
} from 'react-router-dom';
import 
{ 
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


//import { createBrowserHistory } from "history";
// import indexRoutes from "./route/index.jsx";
function hello(){
return(<h1>Bienvenu sur votre application</h1>)

}
 const routing = (
   
 <Router>
     <App/>
     <Row>
         <Col md={{ size:3 , order: 0, offset: 0 }}>
         <ListGroup >
              <ListGroupItem tag="a" href="/acceuil">Accueil</ListGroupItem>
              <ListGroupItem tag="a" href="/TauxDactivite">Taux d'activité mensuel</ListGroupItem>
              <ListGroupItem tag="a" href="/">Charges et poids par emplois</ListGroupItem>
             <div> <ListGroupItem className='sideHeader' tag="a" href="/contact">Charge et poids par processus</ListGroupItem></div>
              <ListGroupItem tag="a" href="/">Charge et poids par tache et par processus</ListGroupItem>
              <ListGroupItem tag="a" href="/">Charge et poids par tache et par metier</ListGroupItem>
              <ListGroupItem tag="a" href="/ParametreTab">Parametrage système</ListGroupItem>
          </ListGroup>
         </Col>
         <Col md="9"> 
         <Route path="/TauxDactivite" component={TauxDactivite} />
         <Col md="9"> <Route path="/ParametreTab" component={ParametreTab}/></Col> 
         <Col md="9"> <Route path="/acceuil" component={hello}/></Col> 

         </Col>

      </Row>
 </Router>)
 ReactDOM.render(routing, document.getElementById('root'));