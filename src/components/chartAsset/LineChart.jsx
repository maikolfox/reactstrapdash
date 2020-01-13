import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { FormGroup, Input, Form, Label, Col, FormText, Button,Modal,ModalBody } from "reactstrap";
import '../css/main.css'
import ConfigUrl from '../asset/ConfigUrl';
import Loader from '../asset/Loader';
// constant for get chart data
const datasProps = {
  labels: [],
  datasets: [
    {
      data: []
    }
  ]
};
function returnMonth(expression)
{
  switch(expression) {
  case "01/1900":
    return "JANVIER";    
  case "02/1900":
    return "FEVRIER";  
  case "03/1900":
    return "MARS";  
  case "04/1900":
      return "AVRIL"; 
  case "05/1900":
      return "MAI";
  case "06/1900":
      return "JUIN";
  case "07/1900":
      return "JUILLET";
  case "08/1900":
      return "AOUT";
  case "03/1900":
      return "SEPTEMBRE"; 
  case "10/1900":
      return "OCTOBRE";
  case "11/1900":
      return "NOVEMBRE";
  case "12/1900":
      return "DECEMBRE";           
  default:
    // code block
 } 

}
const chartDataUiParam = {

  label: '',
  fill: false,
  lineTension: 0.1,
  backgroundColor: 'rgba(75,192,192,0.4)',
  borderColor: 'rgba(75,192,192,1)',
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0.0,
  borderJoinStyle: 'miter',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 1,
  pointHitRadius: 10,
}

class LineChart extends Component {

  constructor(props) {
    super(props);
    this.state =
      {
        mdIsSet: '',
        mfIsSet: '',
        agIsSet: '',
        anIsSet: '',
        agence: '',
        annee: '',
        moisDebut: '',
        moisFin: '',
        responseToPost: '',
        dataToSend: [],
        pathChartFile: '',
        loaded:false
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDownload = this.handleDownload.bind(this);
    // this.handleOnChange = this.handleOnChange.bind(this);

  };


  // handleDownload = async e => {
  //   e.preventDefault();
  //   const generateXSLCharline = await fetch('/service/generateXSLCharline',
  //     {
  //       method: 'POST',
  //       headers:
  //       {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(
  //         {
  //           tauxActivite: this.state.responseToPost.taux,
  //           mois: this.state.responseToPost.mois
  //         }),
  //     });
  //   const body = await generateXSLCharline.text();
  //   this.setState({ pathChartFile: JSON.parse(body) });




  //   // fake server request, getting the file url as response
  //   setTimeout(() => {
  //     const response = {
  //       file: 'http://127.0.0.1:8887/ooxml-line-chart.xlsx',
  //     };
  //     // server sent the url to the file!
  //     // now, let's download:
  //     window.location.href = response.file;
  //     // you could also do:
  //     // window.open(response.file);
  //   }, 100);




  // }
  handleSubmit = async e => {
    if(this.state.annee<2015 || this.state.annee>2018){

      window.alert("Les données de la base de s'etendent de 2015-2018") ;
  } else{
    this.setState({loaded:true});
    e.preventDefault();
    // const response = await fetch('/tauxDactivite',
    //   {
    //     method: 'POST',
    //     headers:
    //     {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(
    //       {
    //         annee: this.state.annee,
    //         moisDepart: this.state.moisDebut,
    //         moisFin: this.state.moisFin
    //       }),
    //   });
    // const body = await response.text();
    // this.setState({ responseToPost: JSON.parse(body) });
    // var dataPropsUpdate =
    // {
    //   ...datasProps,
    //   labels: this.state.responseToPost.mois,
    //   datasets: [{
    //     ...chartDataUiParam,
    //     data: this.state.responseToPost.taux
    //   }]
    // };
    // this.setState({ dataToSend: dataPropsUpdate });
    // console.log(dataPropsUpdate);
    // console.log("to send : " + this.state.dataToSend);
    //
    await fetch(ConfigUrl.basePath+"/tauxDactivite",
      {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            annee: this.state.annee,
            moisDepart: returnMonth(this.state.moisDebut),
            moisFin: returnMonth(this.state.moisFin),
            agence:this.state.agence
          }),
      }) 
    .then(res => res.json())
        .then(response=>{
          console.log(response)
          this.setState({ pathChartFile: response.data.uriFile,loaded:false });
          window.open(ConfigUrl.basePath+"/downloadFile?fileName="+response.data.uriFile);

      }).catch(error => {
        this.setState({ loaded:false });
        window.alert("Une erreur est survenue :"+error);
    })
  
    }
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="exampleEmail" md={4}>Agence :</Label>
            <Col md={{ size: 4, order: 1, offset: -1 }}>
              <Input valid={this.state.agIsSet} invalid={!this.state.agIsSet}
                type="select"
                id="selectAgence"
                name="selectbasic"
                value={this.state.agence}
                onChange={e => {
                  this.setState({ agence: e.target.value })
                  if (e.target.value !== "0") {
                    this.setState({ agIsSet: true })
                  }
                  else { this.setState({ agIsSet: false }) }

                }
                }
              >
                <option value="0" defaultValue >Choisir une agence ou un service :</option>
                <optgroup label="Agence">
                  <option value="siege plateau">Siège plateau</option>
                  <option value="Nanan Yamousso">Nanan Yamousso</option>
                </optgroup>
                <optgroup label="Service">
                  <option value="service1">service1</option>
                  <option value="service2">service2</option>
                </optgroup>
              </Input>
              <FormText hidden={this.state.agIsSet}>Selectionner une agence</FormText>
            </Col>
            <Label for="exampleEmail3" md={4}>Mois de debut</Label>
            <Col md={{ size: 4, order: 1, offset: - 1 }}>
              <Input valid={this.state.mdIsSet} invalid={!this.state.mdIsSet}
                type="select"
                id="selectAgence"
                name="selectbasic"
                value={this.state.moisDebut}
                onChange={e => {
                  this.setState({ moisDebut: e.target.value })
                  if (e.target.value !== "0") {
                    this.setState({ mdIsSet: true })
                  }
                  else { this.setState({ mdIsSet: false }) }
                  let md = e.target.value;
                  let mf = this.state.moisFin;
                  console.log("md on change");
                  md = md.split('/');
                  mf = mf.split('/');
                  console.log("md= " + md[0]);
                  console.log("mf= " + mf[0]);
                  if (parseInt(md[0], 10) > parseInt(mf[0], 10)) {
                    this.setState({ mdIsSet: false })
                    console.log("md> mf md on change")
                  }
                  if ((parseInt(md[0], 10) < parseInt(mf[0], 10)) && (md[0] > 0)) {
                    this.setState({ mdIsSet: true })
                    console.log(this.state.moisDebut)
                    console.log("md= " + md[0]);
                    console.log("ok4");


                  }
                  else { this.setState({ mdIsSet: false }) }
                  console.log("md on change end");
                }
                }
              >
                <option value="0" defaultValue >Choisir le mois de debut :</option>
                <option value="01/1900">Janvier</option>
                <option value="02/1900">Février</option>
                <option value="03/1900">Mars</option>
                <option value="04/1900">Avril</option>
                <option value="05/1900">Mai</option>
                <option value="06/1900">Juin</option>
                <option value="07/1900">Juillet</option>
                <option value="08/1900">Août</option>
                <option value="09/1900">Septembre</option>
                <option value="10/1900">Octobre</option>
                <option value="11/1900">Novembre</option>
                <option value="12/1900">Décembre</option>
              </Input>
              <FormText hidden={this.state.mdIsSet}>Selectionner un mois valide</FormText>
            </Col>
            <Label for="exampleEmail2" sm={4}>Mois de fin</Label>
            <Col md={{ size: 4, order: 2, offset: -1 }}>
              <Input valid={this.state.mfIsSet} invalid={!this.state.mfIsSet}
                type="select"
                name="select"
                id="selectMoisFin"
                value={this.state.moisFin}
                onChange={e => {
                  this.setState({ moisFin: e.target.value })

                  if (e.target.value !== "0") {
                    this.setState({ mfIsSet: true })
                  }
                  else { this.setState({ mfIsSet: false }) }
                  let md = this.state.moisDebut;
                  let mf = e.target.value;
                  console.log("mf on change");
                  md = md.split('/');
                  mf = mf.split('/');
                  if (parseInt(md[0], 10) > parseInt(mf[0], 10)) {
                    this.setState({ mdIsSet: false })
                    console.log("md= " + md[0]);
                    console.log("md= " + md[0]);
                    console.log("md > mf mf on change")
                  }
                  if ((parseInt(md[0], 10) < parseInt(mf[0], 10)) && (md[0] > 0)) {
                    this.setState({ mdIsSet: true })
                    console.log(this.state.moisDebut)
                    console.log("md= " + md[0]);
                    console.log("md<mf mf on change")
                  }

                  console.log("mf on change end");
                }

                }

              >
                <option value="0" defaultValue >Choisir le mois de fin</option>
                <option value="01/1900">Janvier</option>
                <option value="02/1900">Février</option>
                <option value="03/1900">Mars</option>
                <option value="04/1900">Avril</option>
                <option value="05/1900">Mai</option>
                <option value="06/1900">Juin</option>
                <option value="07/1900">Juillet</option>
                <option value="08/1900">Août</option>
                <option value="09/1900">Septembre</option>
                <option value="10/1900">Octobre</option>
                <option value="11/1900">Novembre</option>
                <option value="12/1900">Décembre</option>
              </Input>
              <FormText hidden={this.state.mfIsSet}>Selectionner un mois valide</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail2" sm={12}>Année :</Label>
            <Col md={{ size: 4, order: 1, offset: -1 }}>
              <Input valid={this.state.anIsSet} invalid={!this.state.anIsSet}
                type="number"
                name="select"
                id="selectMoisFin"
                value={this.state.annee}
                onChange={e => {
                  this.setState({ annee: e.target.value })

                  if (e.target.value !== "") {
                    this.setState({ anIsSet: true })
                  }
                  else { this.setState({ anIsSet: false }) }

                }

                }
              >
              </Input>
              <FormText hidden={this.state.anIsSet}>Selectionner une année valide</FormText>
            </Col>
          </FormGroup>
          <Button id="ButtonValider" disabled={!(this.state.mfIsSet && this.state.mdIsSet && this.state.agIsSet && this.state.anIsSet) || (this.state.moisDebut > this.state.moisFin)}>Valider</Button>

        </Form>
        <Modal size="sm"  isOpen={this.state.loaded}>
          <Loader></Loader>
        </Modal>
        {/* <h2 >Courbe du Taux d'activité</h2> */}
        {/* <Line ref="chart" width={8}
          height={3} data={this.state.dataToSend} />
        <Button onClick={this.handleDownload} id="ButtonTelecharger" hidden={!(this.state.mfIsSet && this.state.mdIsSet && this.state.agIsSet && this.state.anIsSet) || (this.state.moisDebut > this.state.moisFin)}
        >Telecharger le diagramme</Button> */}
      </div>
    );
  }

  // componentDidMount() {
  //   this.setState.datas = this.refs.chart.chartInstance.data
  //   // {console.log(this.state.datas)}

  // }

  // componentDidUpdate() {
  //   //    return (<Line data={this.state.dataToSend} />);
  //   //this.setState.datas  = this.refs.chart.chartInstance.data    
  // }

}
export default LineChart;