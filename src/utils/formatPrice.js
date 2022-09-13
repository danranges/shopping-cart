const formatPrice = (price, discount = 0) => {
  const adjPrice = Math.floor(price * (1 - discount))

  return Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(adjPrice)
}

export default formatPrice
