import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./components/Nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import Container from "react-bootstrap/Container"
import ProductLine from "./components/ProductLine"

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Container fluid className="mx-0 mb-4 px-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:lineId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
