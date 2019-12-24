import React from 'react';
import BarChart from '../chartAsset/BarChart'
import { CardBody, Card, CardHeader } from "reactstrap";
import PushLeft,{Push} from './subMainStyle';


export default class ChargePoidsTacheMetier extends React.Component {
    render() {
      return (
      <Card style={Push}>
        <CardHeader>Charge et poids par processus</CardHeader>
        <CardBody>
          <BarChart labelBarChart="Charge et poids par metier"/>
        </CardBody>
      </Card>)
    }
}