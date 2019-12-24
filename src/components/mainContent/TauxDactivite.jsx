import React, { Component } from 'react';
import LineChart from '../chartAsset/LineChart.jsx';
import { CardBody, Card, CardHeader } from "reactstrap";
import {Push} from './subMainStyle'


class Content extends Component {
  render() {
    return (
    <Card style={Push}>
      <CardHeader>Taux d'activité</CardHeader>
      <CardBody>
        <LineChart />
      </CardBody>
    </Card>

    )
  }
}
export default Content