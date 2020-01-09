import React from 'react';
import IndicatorAsset from '../chartAsset/IndicatorAsset'

import { CardBody, Card, CardHeader } from "reactstrap";
import PushLeft,{Push} from './subMainStyle'

export default class ChargePoidsTacheProcessus extends React.Component {
    render() {
      return (
      <Card style={Push}>
        <CardHeader>Charge et poids par tache/processus</CardHeader>
        <CardBody>
            <IndicatorAsset serviceUrl="/chargePoids/TacheProcessus/"/>   
        </CardBody>
      </Card>)
    }
}