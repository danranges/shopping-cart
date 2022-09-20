import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
} from "react-bootstrap"
import { BsTrash } from "react-icons/bs"
import promotions from "../data/promotions.json"
import productInfo from "../data/products.json"
import formatPrice from "../utils/formatPrice"
import useMediaQuery from "../hooks/useMediaQuery"
import { UseShoppingCart } from "../context/CartContext"

const CartItem = ({ item }) => {
  const { id, qty } = item
  const { name, price, imgUrl } = productInfo.find((item) => item.id === id)
  const promotion = promotions.find((item) => item.id === id)?.discount || null
  const adjPrice = !!promotion ? Math.floor(price * (1 - promotion)) : price
  const { incrementItem, decrementItem, removeItem } = UseShoppingCart()
  const isDesktop = useMediaQuery("(min-width: 840px)")
  const isSmallMobile = useMediaQuery("(max-width: 440px)")

  return (
    <Container fluid className="d-flex align-items-center border-bottom py-2">
      <Image src={imgUrl} width="60px" className="me-2" />
      <Container fluid>
        <Row className="h-100 align-items-centerm me-2">
          <Col xs={6} sm>
            <b style={{ fontSize: "0.9rem" }}>{name}</b>
          </Col>
          <Col style={{ fontSize: "0.85rem" }}>
            {!isSmallMobile && (
              <span className={promotion ? "text-danger" : "text-muted"}>
                {formatPrice(adjPrice)}
              </span>
            )}
            {promotion && isDesktop && (
              <span className="text-muted ms-2">
                <s>{formatPrice(price)}</s>
              </span>
            )}
          </Col>
          <Col xs={6} sm style={{ fontSize: "0.85rem" }}>
            {"Qty: " + qty}
          </Col>
          <Col xs={6} sm style={{ fontSize: "0.85rem" }}>
            {formatPrice(qty * adjPrice)}
          </Col>
        </Row>
      </Container>
      <ButtonGroup size="md">
        <Button variant="outline-secondary" onClick={() => decrementItem(id)}>
          -
        </Button>
        <Button variant="outline-secondary" onClick={() => incrementItem(id)}>
          +
        </Button>
        <Button variant="outline-danger" onClick={() => removeItem(id)}>
          <BsTrash />
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default CartItem
