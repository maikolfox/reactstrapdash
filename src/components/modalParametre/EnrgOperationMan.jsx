import React from "react";
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

class EnrgOperationMan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libelleOp: '',
      annee: '',
      mois:'',
      volume:'',
      libelleOpIsSet: false,
      anneeIsSet: false,
      moisIsSet:false,
      volumeIsSet: false,
      nestedModal: false,
    };
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  handleSubmit() {
    console.log(this.state.descritpionProc);
    this.setState({ libelleOp: null });
    this.setState({ annee: null });
    this.setState({ mois: null });
    this.setState({ volume: null });
    this.setState({ anneeIsSet: false });
    this.setState({ volumeIsSet: false });
    this.setState({ libelleOpIsSet: false });
    this.toggleNested();
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
          <ModalHeader toggle={this.toggle}>Formulaire de renseignement d'un volume d'opération manuelle</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
                <Label for="exampleEmail" md={12}>Libellé opération</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.libelleOpIsSet} invalid={!this.state.libelleOpIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    required
                    value={this.state.libelleOp}
                    onChange={e => {
                      this.setState({ libelleOp: e.target.value })
                      if (e.target.value !== null) {
                        this.setState({ libelleOpIsSet: true })
                      }
                      else { this.setState({ libelleOpIsSet: false }) }
                    }
                    }
                  >
                    <option value="0" defaultValue >Choisir une opération</option>
                    <option value="2015">op1</option>
                    <option value="2016">op2</option>
                    <option value="2017">op3</option>
                    <option value="2018">op4</option>
                    <option value="2019">op5</option>
                  </Input>
                  <FormText hidden={this.state.anneeIsSet}>Selectionner une opération</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Année</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.anneeIsSet} invalid={!this.state.anneeIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    required
                    value={this.state.annee}
                    onChange={e => {
                      this.setState({ annee: e.target.value })
                      if (e.target.value !== 0) {
                        this.setState({ anneeIsSet: true })
                      }
                      else { this.setState({ anneeIsSet: false }) }
                    }
                    }
                  >
                    <option value="0" defaultValue >Choisir une année</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                  </Input>
                  <FormText hidden={this.state.anneeIsSet}>Selectionner l'année</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={4}>Selectionner le mois :</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.moisIsSet} invalid={!this.state.moisIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    required
                    value={this.state.mois}
                    onChange={e => {
                      this.setState({ mois: e.target.value })
                      if (e.target.value !== 0) {
                        this.setState({ moisIsSet: true })
                      }
                      else { this.setState({ moisIsSet: false }) }
                    }}
                  >
                    <option value="0" defaultValue >Choisir un mois :</option>
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
                  <FormText hidden={this.state.moisIsSet}>Selectionner un mois</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={4}>Renseigner le volume</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                <Input valid={this.state.volumeIsSet} invalid={!this.state.volumeIsSet}
                  type="number"
                  name="number"
                  id="exampleNumber"
                  placeholder="volume de l'opération"
                  min="0"
                  required
                  value={this.state.volume}
                  onChange={e => {
                    this.setState({ volume: e.target.value })
                    if (e.target.value !=='') {
                      this.setState({ volumeIsSet: true })
                    }
                    else { this.setState({ volumeIsSet: false }) }
                  }}
                />
                <FormText hidden={this.state.volumeIsSet}>Renseigner le volume</FormText>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={e => {
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
export default EnrgOperationMan;