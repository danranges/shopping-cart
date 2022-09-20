import { UseShoppingCart } from "../context/CartContext"
import { Button, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import EmptyCart from "../components/EmptyCart"
import CartItem from "../components/CartItem"
import formatPrice from "../utils/formatPrice"
import getCartTotal from "../utils/getCartTotal"

const Cart = () => {
  const { getCart, emptyCart } = UseShoppingCart()
  const cart = getCart()
  const subtotalCart = formatPrice(getCartTotal(cart), 0.15)
  const totalCart = formatPrice(getCartTotal(cart), 0)

  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <Container fluid>
      <h1 className="pb-2 border-bottom">Your Cart</h1>
      {cart.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
      <Container
        fluid
        className="my-4 align-self-start"
        style={{ maxWidth: "400px" }}
      >
        <h5>Order Summary</h5>
        <Row className="text-muted">
          <Col xs={3}>Subtotal</Col>
          <Col>{subtotalCart}</Col>
        </Row>
        <Row className="text-muted">
          <Col xs={3}>Shipping</Col>
          <Col>kr 0</Col>
        </Row>
        <Row className="border-top border-bottom my-2 py-2">
          <Col xs={3}>
            <b>Total</b>
          </Col>
          <Col>{totalCart}</Col>
        </Row>
        <Button
          as={Link}
          to="/checkout"
          onClick={emptyCart}
          variant="outline-secondary"
        >
          Checkout
        </Button>
      </Container>
    </Container>
  )
}
export default Cart
