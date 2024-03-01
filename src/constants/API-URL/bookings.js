import { booking } from '.'
export const baseBookings = `${process.env.NEXT_PUBLIC_SERVER_URL}/${booking}`

export const acceptBooking_API_URL = baseBookings + '/log'
export const getBookingDetailAPI_URL = (id) => `${baseBookings}/${id}/detail`
