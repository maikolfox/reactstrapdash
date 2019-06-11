import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Route, //Link, 
  BrowserRouter as Router //Switch 
} from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem, 
  //Card, CardTitle, Button 
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import TauxDactivite from './components/mainContent/TauxDactivite.jsx';
//import Content2 from './components/Content2.jsx';



//import { createBrowserHistory } from "history";
// import indexRoutes from "./route/index.jsx";

 const routing = (
 <Router>
     <App/>
     <Container>

     <Row>

         <Col md={{ size:3 , order: 0, offset: 0 }}>
         <ListGroup >
              <ListGroupItem className='sideHeader' href="#">Menu général</ListGroupItem>
              <ListGroupItem tag="a" href="/TauxDactivite">Taux d'activité mensuel</ListGroupItem>
              <ListGroupItem tag="a" href="/">Charges et poids par emplois</ListGroupItem>
              <ListGroupItem tag="a" href="/contact">Charge et poids par processus</ListGroupItem>
              <ListGroupItem tag="a" href="/">Charge et poids par tache et par processus</ListGroupItem>
              <ListGroupItem tag="a" href="/">Charge et poids par tache et par metier</ListGroupItem>
            </ListGroup>
         </Col>
         <Col md="9"> <Route path="/TauxDactivite" component={TauxDactivite} /></Col>
         </Row>
         </Container>
 </Router>)
 ReactDOM.render(routing, document.getElementById('root'));