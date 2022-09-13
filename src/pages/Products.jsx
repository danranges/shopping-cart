import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import products from "../data/products.json"
import productLines from "../data/productLines.json"
import ProductLine from "../components/ProductLine"
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom"

const Products = () => {
  const { lineId } = useParams()
  return (
    <Container fluid>
      {!lineId ? <h1 className="mb-4">All Products</h1> : null}
      {productLines.map(
        (line) =>
          (line.id === lineId || !lineId) && (
            <ProductLine key={line.name} line={line}>
              {products.map(
                (product, idx) =>
                  product.line === line.id && (
                    <Col key={idx}>
                      <ProductCard product={product} line={line} />
                    </Col>
                  )
              )}
            </ProductLine>
          )
      )}
    </Container>
  )
}

export default Products
