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

class EnrgProcessusModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
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
          <ModalHeader toggle={this.toggle}>Formulaire d'enregistrement d'un processus</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup >
                <Label for="exampleEmail" md={12}>Libellé Processus</Label>
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
                  <FormText hidden={this.state.descIsSet}>Renseigné le libellé processus</FormText>
                </Col>
                <Row>&nbsp;</Row>
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
                  <FormText hidden={this.state.descIsSet}>Renseigné le libellé processus</FormText>
                </Col>
                <Row>&nbsp;</Row>               
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
export default EnrgProcessusModal;