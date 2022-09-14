import { Container, Carousel, Image } from "react-bootstrap"
import useMediaQuery from "../hooks/useMediaQuery"
import imgsCarousel from "../data/imgsCarousel.json"

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 764px)")
  const imgs = isDesktop
    ? imgsCarousel.find((obj) => obj.size === "lg").imgs
    : imgsCarousel.find((obj) => obj.size === "sm").imgs

  return (
    <Container fluid className="mx-0 px-0">
      <Carousel ride>
        {imgs.map((img) => (
          <Carousel.Item>
            <Image src={img} className="d-block w-100" />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}

export default Home
