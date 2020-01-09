import React from 'react';
import BarChart from '../chartAsset/BarChart'
import { CardBody, Card, CardHeader } from "reactstrap";
import IndicatorAsset from '../chartAsset/IndicatorAsset'
import PushLeft,{Push} from './subMainStyle';


export default class ChargePoidsTacheMetier extends React.Component {
    render() {
      return (
      <Card style={Push}>
        <CardHeader>Charge et poids tache/metier</CardHeader>
        <CardBody>
          <IndicatorAsset serviceUrl="/chargePoids/TacheMetier/"/>
        </CardBody>
      </Card>)
    }
}