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
import SideBar ,{SwitchRoute} from "./components/asset/SideBar"
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

const routingConst=[
  {
      url:'Accueil',
      libelle:"Accueil",
      component:hello
  },
  {
      url:'TauxDactivite',
      libelle:"Taux d'activité mensuel",
      component:TauxDactivite
  },
  {
      url:'ChargePoidsEmplois',
      libelle:"Charges et poids par emplois",
      component:Notfound
  },
  {
    url:'ChargePoidsProcessus',
    libelle:"Charge et poids par processus",
    component:ChargePoidsProcessus
  },
  {
    url:'ChargePoidsTacheProcessus',
    libelle:"Charge et poids par tache et par processus",
    component:Notfound
  },
  {
    url:'ChargePoidsMetier',
    libelle:"Charge et poids par tache et par metier",
    component:Notfound
  },
  {
    url:'les20tachesLourdes',
    libelle:"Les 20 tâches les plus lourdes",
    component:Notfound
  },
  {
    url:'ParametreTab',
    libelle:"Parametrage système",
    component:ParametreTab
  }

]


const MenuGeneral = ({ match }) => 
(
    <React.Fragment>
         <SideBar match="/effop" menuItem={routingConst} menuName="Menu General"></SideBar>
         <SwitchRoute basePath="/effop_" menuItem={routingConst} ></SwitchRoute>
    </React.Fragment>
)
const Routing = (
  <Router basename="/" >
    <App />
    <Row>
      <Col md={{ size: 2, order: 0, offset: 0 }}>
      <MenuGeneral/>
      </Col>
      <Col md="8">
        <Switch>
          <Route path="/effop/ParametreTab" component={ParametreTab} />
          <Route path="/effop/TauxDactivite" component={TauxDactivite} />
          <Route path="/effop/Accueil" component={hello} />
          <Router exact path="/" render={() => (<Redirect to="/Accueil" />)} />
          <Route path="/effop/ChargePoidsProcessus" component={ChargePoidsProcessus} />
          <Route path="/effop/ChargePoidsTacheProcessus" component={Notfound}/>
          <Route path="/effop/les20tachesLourdes" component={Notfound} />
          <Route component={Notfound} />
        </Switch>
      </Col>
    </Row>
  </Router>)

ReactDOM.render(Routing, document.getElementById('root'));