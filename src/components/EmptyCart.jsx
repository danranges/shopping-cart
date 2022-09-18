import { Link } from "react-router-dom"
import { Button, Container } from "react-bootstrap"

const EmptyCart = () => {
  return (
    <Container fluid>
      <p>Your cart is empty.</p>
      <Button as={Link} to="/products" variant="outline-secondary">
        Continue Shopping
      </Button>
    </Container>
  )
}

export default EmptyCart
