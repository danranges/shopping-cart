import { UseShoppingCart } from "../context/CartContext"
import Container from "react-bootstrap/Container"
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses"
import EmptyCart from "../components/EmptyCart"

const Cart = () => {
  const { getCart } = UseShoppingCart()
  const cart = getCart()

  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <Container fluid>
      <h1 className="border-bottom">Your Cart</h1>

      {cart.map((item) => (
        <p>{JSON.stringify(item)}</p>
      ))}
    </Container>
  )
}
export default Cart
