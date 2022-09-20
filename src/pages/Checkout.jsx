import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <Container fluid>
      <h1>Thank you!</h1>
      <p>Your imaginary purchase is being processed for imaginary delivery.</p>
      <Button as={Link} to="/products" variant="outline-secondary">
        Continue Shopping
      </Button>
    </Container>
  )
}

export default Checkout
