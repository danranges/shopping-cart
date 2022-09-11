import { Navbar as NavbarBs } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <NavbarBs bg="light" className="shadow-sm mb-3" expand="sm" sticky="top">
      <Container fluid>
        <NavbarBs.Brand href="/">
          <img src="/imgs/tenaya.svg" height={"40px"} />
        </NavbarBs.Brand>
        <NavbarBs.Toggle />
        <NavbarBs.Collapse>
          <Nav>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Products">
              Products
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Cart">
              Cart
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}

export default NavBar
