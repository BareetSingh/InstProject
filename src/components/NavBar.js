import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ShowBranch from "./ShowBranch";
import AddBranch from "./AddBranch";
import DeleteBranch from "./DeleteBranch";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
        <Navbar color="primary" light expand="md" className="shadow">
          <NavbarBrand href="/">Practo</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>

                <DropdownMenu right className="bg-transparent">
                  <DropdownItem color="primary">
                    <Link
                      className="list-group-item list-group-item-action"
                      tag="a"
                      to="/"
                    >
                      Show Branch
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      className="list-group-item list-group-item-action"
                      tag="a"
                      to="/add-branch"
                    >
                      Add Branch
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      className="list-group-item list-group-item-action"
                      tag="a"
                      to="/delete-branch"
                    >
                      Delete Branch
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <div>
          <Route path="/" component={ShowBranch} exact />
          <Route path="/add-branch" component={AddBranch} exact />
          <Route path="/delete-branch" component={DeleteBranch} exact />
        </div>
      </Router>
    </div>
  );
};
export default NavBar;
