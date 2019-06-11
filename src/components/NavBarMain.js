import React from "react";
import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  NavbarBrand,
  //Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import "./test.css"

class MainNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
     
        <Navbar className='headerStyle'  light expand="md">
          <NavbarBrand href="/">
            <img src="./image/logoBridgeBank.png" alt="BBG" />
          </NavbarBrand>
              <h1 id="navBarText"><span>Dashboard EFFOP</span><small> outil de mesure de l'efficacite operationnelle</small></h1>
        </Navbar>


    
    );
  }
}
export default MainNavBar;
