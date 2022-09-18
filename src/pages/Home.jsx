import { Link } from "react-router-dom"
import { Container, Button, Stack, Image, Col } from "react-bootstrap"
import HeroCarousel from "../components/HeroCarousel"
import useMediaQuery from "../hooks/useMediaQuery"

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 764px)")
  const orientation = isDesktop ? "row" : "column"

  return (
    <Container fluid className="mx-0 px-0">
      <HeroCarousel />
      <Container
        style={{ maxWidth: "800px", height: "100%" }}
        className="d-flex flex-column justify-content-center my-4 h-100"
      >
        <Container className="d-flex flex-column align-items-center my-4">
          <h2>IMPROVE YOUR PERFORMANCE</h2>
          <p className="my-4 pb-2">
            Tenaya has been proudly handcrafting climbing shoes in Spain since
            1997, putting the needs of the climber first and designing the best
            possible footwear to help climbers achieve their goals.
          </p>
        </Container>
        <Container className={`d-flex flex-${orientation} gap-1 mb-4`}>
          <Col>
            <Image
              src="/imgs/home-stack/destacado01.jpg"
              className="d-block w-100"
            />
          </Col>
          <Col>
            <Image
              src="/imgs/home-stack/destacado02.jpg"
              className="d-block w-100"
            />
          </Col>
          <Col>
            <Image
              src="/imgs/home-stack/destacado03.jpg"
              className="d-block w-100"
            />
          </Col>
        </Container>
        <Container>
          <h3 className="mt-4">Disclaimer:</h3>
          <p className="mb-4">
            This storefront has no affiliation with Tenaya. All branding,
            assets, verbiage, and other intellectual property are copywritten
            and/or trademarked by Tenaya Sports, S.L. The sole purpose of this
            website is to serve as an example shopping cart/storefront built
            with React.
          </p>
        </Container>
        <Button
          variant="outline-secondary"
          as={Link}
          to="/products/"
          className="mx-2"
        >
          Go to Store
        </Button>
      </Container>
    </Container>
  )
}

export default Home
