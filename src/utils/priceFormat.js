const priceFormat = (locale, currency, price) =>
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(price)

export default priceFormat
