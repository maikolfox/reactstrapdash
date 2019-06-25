import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';

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
import './../css/main.css';
import TauxDactivite from './../mainContent/TauxDactivite.jsx';

class Routing extends React.Component{


constructor(props) 
{
    super(props);
    this.state =
    { 
        focusLink:false,
        focusLink1:'',
        focusLink2:'',
        focusLink3:'',
    }
}
handleFocus()
{
    this.setState({focusLink : 'focusLink'});
}
 render(){
    return (
        <Router>
            <App/>
            <Row>
                <Col md={{ size:3 , order: 0, offset: 0 }}>
                <ListGroup >
                     <ListGroupItem>Menu général</ListGroupItem>
                     <ListGroupItem tag="a" href="/TauxDactivite">Taux d'activité mensuel</ListGroupItem>
                     <ListGroupItem tag="a" href="/">Charges et poids par emplois</ListGroupItem>
                   {this.state.focusLink ? ( <div><ListGroupItem className='sideHeader' tag="a" href="/contact">Charge et poids par processus</ListGroupItem></div>) : (<ListGroupItem  tag="a" href="/contact">Charge et poids par processus</ListGroupItem>)}
                     <ListGroupItem tag="a" href="/">Charge et poids par tache et par processus</ListGroupItem>
                     <ListGroupItem tag="a" href="/">Charge et poids par tache et par metier</ListGroupItem>
                     <ListGroupItem tag="a" href="/">Parametrage système</ListGroupItem>
                 </ListGroup>
                </Col>
                <Col md="9"> <Route path="/TauxDactivite" component={TauxDactivite} /></Col>
                </Row>
        </Router>)
 }


}
export default Routing ;