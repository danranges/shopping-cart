import React, { useContext, useState } from "react"

const CartContext = React.createContext()
const CartUpdateContext = React.createContext()

export function UseCart() {
  return useContext(CartContext)
}

export function UseCartUpdate() {
  return useContext(CartUpdateContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const updateCart = () => {
    setCart((prevCart) => prevCart)
    console.log("cart updated")
  }

  return (
    <CartContext.Provider value={cart}>
      <CartUpdateContext.Provider value={updateCart}>
        {children}
      </CartUpdateContext.Provider>
    </CartContext.Provider>
  )
}
