import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"

const EmptyCart = () => {
  return (
    <Container fluid>
      <h1 className="pb-2 border-bottom">Your Cart</h1>
      <p>Your cart is empty.</p>
      <Button as={Link} to="/products" variant="outline-secondary">
        Continue Shopping
      </Button>
    </Container>
  )
}

export default EmptyCart
