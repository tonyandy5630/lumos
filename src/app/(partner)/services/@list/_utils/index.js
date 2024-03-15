import priceFormat from '@/utils/priceFormat'

export const formatData = (obj) => {
    const { name, price, rating, bookedQuantity, code, serviceId } = obj
    return {
        code,
        name,
        price: priceFormat('vi-VI', 'VND', price),
        rating: rating ?? 0,
        bookedQuantity,
        serviceId,
    }
}
