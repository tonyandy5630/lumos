import { booking } from '.'
import root from '.'
export const baseBookings = `${root}/${booking}`

export const progressToNextBookingStatusAPI_URL = baseBookings + '/log'
export const getBookingDetailAPI_URL = (id) => `${baseBookings}/${id}/detail`
export const declineBookingAPI_URL = (id) => baseBookings + '/' + id + '/cancel'
