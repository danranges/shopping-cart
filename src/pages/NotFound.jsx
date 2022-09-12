import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <Container fluid>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't seem to exist.</p>
      <Button as={Link} to="/">
        Go back to Home
      </Button>
    </Container>
  )
}

export default NotFound
