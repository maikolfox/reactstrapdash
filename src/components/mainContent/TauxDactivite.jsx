import React, { Component } from 'react';
import LineChart from '../chartAsset/LineChart.jsx';
import { CardBody, Card, CardHeader, CardTitle } from "reactstrap";


class Content extends Component {
  render() {
    return (
    <Card>
      <CardHeader>Taux d'activité</CardHeader>
      <CardBody>
        <LineChart />
      </CardBody>
    </Card>

    )
  }
}
export default Content