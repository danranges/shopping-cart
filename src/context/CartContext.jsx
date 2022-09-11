import React, { useContext, useState } from "react"

const CartContext = React.createContext()

export function UseShoppingCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const getCartQty = (id) => {
    return cart.find((item) => id === item.id)?.qty || 0
  }

  const incrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.find((item) => id === item.id) == null
        ? [...prevCart, { id, qty: 1 }]
        : prevCart.map((item) =>
            id === item.id ? { ...item, qty: item.qty + 1 } : item
          )
    )
  }

  const decrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.find((item) => id === item.id)?.qty === 1
        ? prevCart.filter((item) => id !== item.id)
        : prevCart.map((item) =>
            id === item.id ? { ...item, qty: item.qty - 1 } : item
          )
    )
  }

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => id !== item.id))
  }

  return (
    <CartContext.Provider
      value={{ getCartQty, incrementItem, decrementItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
