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

class EnrgOperationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      libelleOpe_:'',
      codeOp_:'',
      nature_:'',
      tempsUn_:'',
      metier_:'',
      libelleOpeIsSet_:'',
      codeOpIsSet_:'',
      natureIsSet_:'',
      tempsUnIsSet_:'',
      metierIsSet_:'',
      nestedModal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
  }
   handleCancel()
   {

   }
  handleSubmit() {
    console.log(this.state.descritpionProc);
    this.setState({ libelleOpe_: null });
    this.setState({ codeOp_: null });
    this.setState({ nature_: null });
    this.setState({ tempsUn_: null });
    this.setState({libelleOpeIsSet_:false});
    this.setState({codeOpIsSet_:false});
    this.setState({natureIsSet_:false});
    this.setState({tempsUnIsSet_:false});
    this.setState({metierIsSet_:false});

    this.toggleNested();

  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal
    });
  }

  toggle() {
    this.setState({ libelleOpe_: null });
    this.setState({ codeOp_: null });
    this.setState({ nature_: null });
    this.setState({ tempsUn_: null });
    this.setState({libelleOpeIsSet_:false});
    this.setState({codeOpIsSet_:false});
    this.setState({natureIsSet_:false});
    this.setState({tempsUnIsSet_:false});
    this.setState({metierIsSet_:false});
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
          <ModalHeader toggle={this.toggle}>Formulaire d'enregistrement d'une opération</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
              <Label for="exampleEmail" md={12}>Code opération</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.codeOpIsSet_} invalid={!this.state.codeOpIsSet_}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.codeOp_}
                    required
                    onChange={e => {
                      this.setState({ codeOp_: e.target.value })
                      if (e.target.value !== null && e.target.value.trim() !== "") {
                        this.setState({codeOpIsSet_: true })
                      }
                      else { this.setState({codeOpIsSet_: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.codeOpeIsSet_}>Renseigner le code de l'opération</FormText>
                </Col>
                <Row>&nbsp;</Row>
              
              <Label for="exampleEmail" md={12}>Libellé opération</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.libelleOpeIsSet_} invalid={!this.state.libelleOpeIsSet_}
                    type="text"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.libelleOpe_}
                    required
                    onChange={e => {
                      this.setState({ libelleOpe_: e.target.value })
                      if (e.target.value !== null && e.target.value.trim() !== "") {
                        this.setState({libelleOpeIsSet_: true })
                      }
                      else { this.setState({libelleOpeIsSet_: false }) }
                    }
                    }
                  >
                  </Input>
                  <FormText hidden={this.state.libelleOpeIsSet_}>Renseigner le libellé</FormText>
                </Col>
               
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={12}>Nature</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.natureIsSet_} invalid={!this.state.natureIsSet_}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.nature_}
                    onChange={e => {
                      this.setState({ nature_: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ natureIsSet_: true })
                      }
                      else { this.setState({ natureIsSet_: false }) }
                    }
                    }
                  >
                    <option value="" defaultValue >Selectionner la nature :</option>
                    <option value="manuelle">Manuel</option>
                    <option value="indexe">Indexé</option>
                  </Input>
                  <FormText hidden={this.state.natureIsSet_}>Selectionner une nature</FormText>
                </Col>
                <Row>&nbsp;</Row>
                <Label for="exampleEmail" md={4}>Selectionner le metier :</Label>
                <Col md={{ size: 12, order: 1, offset: -1 }}>
                  <Input valid={this.state.metierIsSet_} invalid={!this.state.metierIsSet_}
                    type="select"
                    id="selectAgence"
                    name="selectbasic"
                    value={this.state.metier_}
                    onChange={e => {
                      this.setState({ metier_: e.target.value })
                      if (e.target.value !== null && e.target.value !== "") {
                        this.setState({ metierIsSet_: true })
                      }
                      else { this.setState({ metierIsSet_: false }) }
                      console.log(!(this.state.metierIsSet_ && this.state.libelleOpeIsSet_ && this.state.natureIsSet_ && this.state.tempsUnIsSet_ && this.state.codeOpIsSet_) )
                    }
                    }
                  >
                    <option value="" defaultValue >Choisir un Metier :</option>
                    <option value="metier_ 1">Metier 1</option>
                    <option value="Processus 2">Metier 2</option>
                  </Input>
                  <FormText hidden={this.state.metierIsSet_}>Selectionner un metier</FormText>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" disabled={!(this.state.metierIsSet_ && this.state.libelleOpeIsSet_ && this.state.natureIsSet_ && this.state.tempsUnIsSet_ && this.state.codeOpIsSet_)} 
             onClick={e => {
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
export default EnrgOperationModal;