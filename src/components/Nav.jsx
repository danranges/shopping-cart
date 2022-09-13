import { Badge, Navbar as NavbarBs, NavDropdown } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink, Link } from "react-router-dom"
import { UseShoppingCart } from "../context/CartContext"

const NavBar = () => {
  const { getCart } = UseShoppingCart()

  const cartQty = getCart().reduce((quantity, item) => quantity + item.qty, 0)

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
            <NavDropdown title="Products">
              <NavDropdown.Item as={Link} to="/products">
                All
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/aerial-plus">
                Aerial Plus
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/balance-pro">
                Balance Pro
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/step-up">
                Step Up
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/Cart">
              Cart
              {cartQty ? (
                <Badge pill bg="secondary" className="mx-2">
                  {cartQty}
                </Badge>
              ) : null}
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  )
}

export default NavBar
