import { Badge, Navbar as NavbarBs } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { NavLink } from "react-router-dom"
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
            <Nav.Link as={NavLink} to="/Products">
              Products
            </Nav.Link>
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
