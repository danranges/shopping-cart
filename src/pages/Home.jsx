import { Link } from "react-router-dom"
import { Container, Button } from "react-bootstrap"
import HeroCarousel from "../components/HeroCarousel"

const Home = () => {
  return (
    <Container fluid className="mx-0 px-0">
      <HeroCarousel />
      <Container
        style={{ maxWidth: "800px" }}
        className="d-flex flex-column justify-content-center my-4"
      >
        <h2>Disclaimer:</h2>
        <p>
          This storefront has no affiliation with Tenaya. All branding, assets,
          verbiage, and other intellectual property are copywritten and/or
          trademarked by Tenaya Sports, S.L. The sole purpose of this website is
          to serve as an example shopping cart/storefront built with React.
        </p>
        <Button variant="outline-secondary" as={Link} to="/products/">
          Go to Store
        </Button>
      </Container>
    </Container>
  )
}

export default Home
