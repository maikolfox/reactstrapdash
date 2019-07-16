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

class EnrgTachModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      processus: '',
      descritpionProc: '',
      procIsSet: '',
      descIsSet: '',
      procIsSet: '',
      nestedModal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }

  handleSubmit() {
    console.log(this.state.descritpionProc);
    this.setState({ processus: null });
    this.setState({ descritpionProc: "" });
    this.setState({ descIsSet: false });
    this.setState({ procIsSet: false });
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
          <ModalHeader toggle={this.toggle}>Formulaire d'enregistrement d'une tâche</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
              <Label for="exampleEmail" md={12}>Libellé tâche</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.descIsSet} invalid={!this.state.descIsSet}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.descritpionProc}
                    onChange={e => {
                      this.setState({ descritpionProc: e.target.value })
                      if (e.target.value !== null) {
                        this.setState({ descIsSet: true })
                      }
                      else { this.setState({ descIsSet: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.descIsSet}>Renseigné le libellé tâche</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Temps unitaire</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.descIsSet} invalid={!this.state.descIsSet}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.descritpionProc}
                    onChange={e => {
                      this.setState({ descritpionProc: e.target.value })
                      if (e.target.value !== null) {
                        this.setState({ descIsSet: true })
                      }
                      else { this.setState({ descIsSet: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.descIsSet}>Renseigné le temps unitaire</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Nature</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.procIsSet} invalid={!this.state.procIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.processus}
                    onChange={e => {
                      this.setState({ processus: e.target.value })
                      if (e.target.value !== null) {
                        this.setState({ procIsSet: true })
                      }
                      else { this.setState({ procIsSet: false }) }
                    }
                    }
                  >
                    <option value="" defaultValue >Selectionner la nature :</option>
                    <option value="Processus 1">Nature 1</option>
                    <option value="Processus 2">Nature 2</option>
                  </Input>
                  <FormText hidden={this.state.procIsSet}>Selectionner une nature</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={4}>Selectionner le metier :</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.procIsSet} invalid={!this.state.procIsSet}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.processus}
                    onChange={e => {
                      this.setState({ processus: e.target.value })
                      if (e.target.value !== null) {
                        this.setState({ procIsSet: true })
                      }
                      else { this.setState({ procIsSet: false }) }

                    }
                    }
                  >
                    <option value="" defaultValue >Choisir un Metier :</option>
                    <option value="Processus 1">Metier 1</option>
                    <option value="Processus 2">Metier 2</option>
                  </Input>
                  <FormText hidden={this.state.procIsSet}>Selectionner un metier</FormText>
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
export default EnrgTachModal;