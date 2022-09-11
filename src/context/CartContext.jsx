import React, { useContext, useState } from "react"

const CartContext = React.createContext()

export function UseShoppingCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const getCartQty = (id) => {
    return cart
  }

  const incrementItem = (id) => {
    setCart((prevCart) => prevCart)
    console.log(`item ${id} incremented`)
  }

  const decrementItem = (id) => {
    setCart((prevCart) => prevCart)
    console.log(`item ${id} decremented`)
  }

  const removeItem = (id) => {
    setCart((prevCart) => prevCart)
    console.log(`item ${id} removed`)
  }

  return (
    <CartContext.Provider
      value={{ getCartQty, incrementItem, decrementItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
