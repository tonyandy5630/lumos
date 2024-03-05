const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
export const toBookingTableData = (data) => {
    const { bookingId, address, status, bookingDate, customer, bookingTime } =
        data
    const formatDate = new Date(bookingDate)
    const date = formatDate.toLocaleDateString('vi-VN', options)
    return {
        bookingId,
        address,
        status,
        date: `${date}`,
        bookingTime: convertBookingTime(bookingTime),
        customerName: customer.fullname,
        status,
    }
}

const convertBookingTime = (time) => {
    switch (time) {
        case 1:
            return '6:00am - 11:30am'
        case 2:
            return '12:30pm - 17:00pm'
        case 3:
            return '17:00pm - 22:00pm'
        default:
            return 'Unknown'
    }
}
