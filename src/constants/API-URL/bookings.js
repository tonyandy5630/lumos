import { bookings } from '.'
export const baseBookings = `${process.env.NEXT_PUBLIC_SERVER_URL}/${bookings}`

export const acceptBooking_API_URL = baseBookings + '/accept'
