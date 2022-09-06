import productList from "../data/products.json"

const Products = () => {
  return productList.map((product, idx) => (
    <h1 key={idx}>{JSON.stringify(product)} </h1>
  ))
}

export default Products
