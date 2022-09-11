import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { UseShoppingCart } from "../context/CartContext"
import { BsTrash } from "react-icons/bs"

const ProductCard = ({ product }) => {
  const { id, name, price, imgUrl } = product
  const { getCartQty, incrementItem, decrementItem, removeItem } =
    UseShoppingCart()

  const qty = getCartQty(id)

  return (
    <Card border="light">
      <Card.Img src={imgUrl} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="text-muted">{price}</span>
        </Card.Title>
        <div className=" d-grid g-2 mt-auto position-relative">
          {qty === 0 ? (
            <Button variant="light" size="md" onClick={() => incrementItem(id)}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-row w-100 align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex w-100 align-items-center justify-content-center"
                style={{ gap: "1rem" }}
              >
                <Button
                  variant="outline-dark"
                  size="md"
                  className="d-flex align-text-center"
                  onClick={() => decrementItem(id)}
                >
                  -
                </Button>
                <span>{qty} in cart</span>
                <Button
                  variant="outline-dark"
                  size="md"
                  className="d-flex align-text-center"
                  onClick={() => incrementItem(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="outline-danger"
                onClick={() => removeItem(id)}
                className="align-items-middle position-absolute start-0 "
              >
                <BsTrash />
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
