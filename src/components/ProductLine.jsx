import { Container, Row } from "react-bootstrap"
import productLines from "../data/productLines.json"

const ProductLine = ({ line, children }) => {
  const productLine = productLines.find(
    (productline) => productline.id === line.id
  )
  return (
    <Container fluid className="px-0 mb-4 border-bottom">
      <h2 className="mb-4">{productLine.name}</h2>
      <p>{productLine.info}</p>
      <Row sm={2} xs={1} lg={3} xl={4} className="g-3">
        {children}
      </Row>
    </Container>
  )
}

export default ProductLine
