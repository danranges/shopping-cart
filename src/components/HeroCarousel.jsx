import { Carousel, Image } from "react-bootstrap"
import useMediaQuery from "../hooks/useMediaQuery"
import imgsCarousel from "../data/imgsCarousel.json"

const HeroCarousel = () => {
  const isDesktop = useMediaQuery("(min-width: 764px)")
  const imgs = isDesktop
    ? imgsCarousel.find((obj) => obj.size === "lg").imgs
    : imgsCarousel.find((obj) => obj.size === "sm").imgs

  return (
    <Carousel>
      {imgs.map((img, idx) => (
        <Carousel.Item key={idx}>
          <Image src={img} className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HeroCarousel
