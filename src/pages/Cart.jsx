import { UseShoppingCart } from "../context/CartContext"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import EmptyCart from "../components/EmptyCart"
import CartItem from "../components/CartItem"
import formatPrice from "../utils/formatPrice"
import getCartTotal from "../utils/getCartTotal"

const Cart = () => {
  const { getCart } = UseShoppingCart()
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
        className="my-2 align-self-start"
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
        <Row className="border-top border-bottom">
          <Col xs={3}>
            <b>Total</b>
          </Col>
          <Col>{totalCart}</Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Cart
