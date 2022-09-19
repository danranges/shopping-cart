import { UseShoppingCart } from "../context/CartContext"
import Container from "react-bootstrap/Container"
import EmptyCart from "../components/EmptyCart"
import CartItem from "../components/CartItem"

const Cart = () => {
  const { getCart } = UseShoppingCart()
  const cart = getCart()

  if (cart.length === 0) {
    return <EmptyCart />
  }
  return (
    <Container fluid>
      <h1 className="pb-2 border-bottom">Your Cart</h1>

      {cart.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </Container>
  )
}
export default Cart
