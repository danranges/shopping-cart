import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./components/Nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import Container from "react-bootstrap/Container"

const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Container fluid className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
