import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { UseCart, UseCartUpdate } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { id, name, price, imgUrl } = product
  const shoppingCart = UseCart()
  const updateCart = UseCartUpdate()
  const qty = 1

  return (
    <Card border="light">
      <Card.Img src={imgUrl} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="text-muted">{price}</span>
        </Card.Title>
        <div className=" d-grid g-2 mt-auto">
          {qty === 0 ? (
            <Button variant="light" size="md" onClick={updateCart}>
              Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column w-100 align-items-center justify-content-center"
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
                  onClick={updateCart}
                >
                  -
                </Button>
                <span>{qty} in cart</span>
                <Button
                  variant="outline-dark"
                  size="md"
                  className="d-flex align-text-center"
                  onClick={updateCart}
                >
                  +
                </Button>
              </div>
              <Button variant="outline-danger" onClick={updateCart}>
                Remove from Cart
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
