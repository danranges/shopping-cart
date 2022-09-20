import products from "../data/products.json"
import promotions from "../data/promotions.json"

const getItemSubtotal = (item) => {
  const { id, qty } = item
  const price = products.find((item) => id === item.id).price
  const promotion = promotions.find((item) => id === item.id)?.discount || 0
  const adjPrice = price * (1 - promotion)

  return qty * adjPrice
}

const getCartTotal = (cart) => {
  return cart.reduce((prev, item) => prev + getItemSubtotal(item), 0)
}

export default getCartTotal
