import { booking } from '.'
import root from '.'
export const baseBookings = `${root}/${booking}`

export const acceptBooking_API_URL = baseBookings + '/log'
export const getBookingDetailAPI_URL = (id) => `${baseBookings}/${id}/detail`
