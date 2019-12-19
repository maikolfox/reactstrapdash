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
import "./css/main.css"

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
          <NavbarBrand href="/effop/home">
            <img width="50%" height="50%"  src="./image/logoBridgeBank.png" alt="BBG" />
          </NavbarBrand>
              <h1 id="navBarText"></h1>
        </Navbar>


    
    );
  }
}
export default MainNavBar;
