import toLocaleDate from '@/utils/date'

export const toBookingTableData = (data) => {
    const { bookingId, address, status, bookingDate, customer, bookingTime } =
        data
    const date = toLocaleDate(bookingDate)
    return {
        bookingId,
        address,
        status,
        date: `${date}`,
        bookingTime: convertBookingTime(bookingTime),
        customerName: customer?.fullname,
        status,
    }
}

export const convertBookingTime = (time) => {
    switch (time) {
        case 1:
            return '6:00am - 12:00am'
        case 2:
            return '12:00pm - 18:00pm'
        case 3:
            return '18:00pm - 22:00pm'
        default:
            return 'Unknown'
    }
}
