export const formatData = (obj) => {
    const { name, price, rating, bookedQuantity, code, serviceId } = obj
    return {
        code,
        name,
        price,
        rating: rating ?? 0,
        bookedQuantity,
        serviceId,
    }
}
