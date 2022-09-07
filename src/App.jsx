import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Container from "react-bootstrap/Container"

const App = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
