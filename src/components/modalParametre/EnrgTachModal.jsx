import React from "react";
import ConfigUrl from "../asset/ConfigUrl";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Form,
  Label,
  Col,
  FormText,
  Row

} from "reactstrap";

class EnrgTachModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      libelleTach:'',
      libelleTachIsSet:false,
      codeTach:'',
      codeTachIsSet:false,
      metier:'',
      metierIsSet:false,
      nature:'',
      natureIsSet:false,
      tempsUn:'',
      tempsUnIsSet:false,
      nestedModal: false,
      dataJson:'',
      responseToPost:""
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  

  handleSubmit = async e=>{
    console.log(this.state.codeTach);
      await fetch(ConfigUrl.basePath+'/createTache',
        {
          method: 'POST',
          headers:
          {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              "codeTache":this.state.codeTach,
              "libelleTach":this.state.libelleTach,
              "metier":this.state.metier,
              "natureTache" :this.state.nature,
              "tempUnit":this.state.tempsUn
            }),
        }).then(res=>res.json()).then(response=>{
          console.log(response);
          this.setState({ responseToPost: "Enregistrement reussie" });  
          this.setState({libelleTach:""});
          this.setState({ codeTach: "" });
          this.setState({ tempsUn: "" });
          this.setState({ metier:""});
          this.setState({ tempsUn:""});
          this.setState({ tempsUnIsSet: false });
          this.setState({ natureIsSet: false });
          this.setState({ tempsUnIsSet: false });
          this.setState({ libelleTachIsSet:false });
          this.setState({ natureIsSet: false });
          this.setState({ metierIsSet: false });
          this.toggle();
          }
        ).catch(error=>{

          alert(error)
        })
    
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal
    });
  }
  toggle() {
    
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
          centered
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <ModalHeader toggle={this.toggle}>Formulaire d'enregistrement d'une tâche</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
              <Label for="exampleEmail" md={12}>Code tâche</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.codeTachIsSet} invalid={!this.state.codeTachIsSet}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.codeTach}
                    onChange={e => {
                      this.setState({ codeTach: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ codeTachIsSet: true })
                      }
                      else { this.setState({ codeTachIsSet: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.codeTachIsSet}>Renseigner le code de la tâche</FormText>
                </Col>
                <Row>&nbsp;</Row>
              <Label for="exampleEmail" md={12}>Libellé tâche</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.libelleTachIsSet} invalid={!this.state.libelleTachIsSet}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.libelleTach}
                    onChange={e => {
                      this.setState({ libelleTach: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ libelleTachIsSet: true })
                      }
                      else { this.setState({ libelleTachIsSet: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.libelleTachIsSet}>Renseigner le libellé tâche</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Temps unitaire</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.tempsUnIsSet} invalid={!this.state.tempsUnIsSet}
                    type="time"
                    id="selectAgence"
                    name="selectbasic"
                    step="1"
                    required
                    value={this.state.tempsUn}
                    onChange={e => {
                      this.setState({ tempsUn: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ tempsUnIsSet: true })
                      }
                      else { this.setState({ tempsUnIsSet: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.tempsUnIsSet_}>Renseigner le temps unitaire</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Nature</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.natureIsSet} invalid={!this.state.natureIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.nature}
                    onChange={e => {
                      this.setState({ nature: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ natureIsSet: true })
                      }
                      else { this.setState({ natureIsSet: false }) }
                    }
                    }
                  >
                    <option value="" defaultValue >Selectionner la nature :</option>
                    <option value="auOrion">Automatique Orion</option>
                    <option value="manuel">Manuelle</option>
                    <option value="crm">CRM</option>
                  </Input>
                  <FormText hidden={this.state.natureIsSet}>Selectionner une nature</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={4}>Selectionner le metier :</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.metierIsSet} invalid={!this.state.metierIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.metier}
                    onChange={e => {
                      this.setState({ metier: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ metierIsSet: true })
                      }
                      else { this.setState({ metierIsSet: false }) }
                    }
                    }
                  >
                    <option value="" defaultValue >Choisir un Metier :</option>
                    <option value="1">GUICHET</option>
                    <option value="2">CHARGE DE CLIENTELE</option>
                    <option value="3">CHARGE D'AFFAIRES</option>
                    <option value="4">CHEF D'AGENCE</option>
                  </Input>
                  <FormText hidden={this.state.metierIsSet}>Selectionner un metier</FormText>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" disabled={!(this.state.metierIsSet && this.state.libelleTach && this.state.natureIsSet && this.state.tempsUnIsSet && this.state.codeTach) } onClick={e => {
              this.toggle();
              this.handleSubmit();
            }}
            >
              Soumettre
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={this.state.nestedModal}
          toggle={this.toggleNested}
          onClosed={this.state.closeAll ? this.toggle : undefined}
          centered
          size="sm"
        >
          <ModalHeader toggle={this.toggleNested} >Formulaire envoyé</ModalHeader>
        </Modal>
      </div>
    );
  }
}
export default EnrgTachModal;