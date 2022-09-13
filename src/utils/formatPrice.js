const formatPrice = (price, discount = 0) => {
  const adjPrice = price * (1 - discount)

  return Intl.NumberFormat("no-NO", {
    style: "currency",
    currency: "NOK",
    maximumSignificantDigits: 2,
  }).format(adjPrice)
}

export default formatPrice
