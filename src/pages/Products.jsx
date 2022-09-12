import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import productList from "../data/products.json"
import ProductCard from "../components/ProductCard"

const Products = () => {
  return (
    <Container fluid>
      <h1 className="my-4">All Products</h1>
      <h2 className="mb-4">Aerial Plus</h2>
      <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
        {productList.map((product, idx) => (
          <Col key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products
