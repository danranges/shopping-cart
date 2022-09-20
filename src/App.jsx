import { Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import NavBar from "./components/Nav"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import NotFound from "./pages/NotFound"
import Container from "react-bootstrap/Container"
import ScrollToTop from "./utils/ScrollToTop"
import Footer from "./components/Footer"

const App = () => {
  return (
    <CartProvider>
      <ScrollToTop>
        <NavBar />
        <Container
          fluid
          style={{ minHeight: "80vh" }}
          className="mx-0 mb-4 px-0 "
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:lineId" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </ScrollToTop>
    </CartProvider>
  )
}

export default App
