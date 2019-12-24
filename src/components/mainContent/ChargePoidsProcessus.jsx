import React from 'react';
import BarChart from '../chartAsset/BarChart'
import { CardBody, Card, CardHeader } from "reactstrap";
import {Push} from './subMainStyle'

export default class ChargePoidsProcessus extends React.Component {
    render() {
      return (
      <Card style={Push}>
        <CardHeader>Charge et poids par processus</CardHeader>
        <CardBody>
          <BarChart labelBarChart="Charge et poids par processus"/>
        </CardBody>
      </Card>)
    }
}