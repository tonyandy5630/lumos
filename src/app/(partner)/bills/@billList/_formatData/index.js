import toLocaleDate from '@/utils/date'

export const toBillData = (data) => {
    const { bookingCode, bookingDate, createDate, totalPrice } = data
    return {
        bookingCode,
        bookingDate,
        createDate: toLocaleDate(createDate),
        totalPrice,
    }
}
