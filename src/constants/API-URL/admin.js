import { admin, partner, service } from '.'
import { baseBookings } from './bookings'

export const baseAdmin = `${process.env.NEXT_PUBLIC_SERVER_URL}/${admin}`

export const getAdminDashBoardStatAPI_URL = `${baseAdmin}/dashboard/stat`

export const getAppNewMonthlyUserAPI_URL = (year) =>
    `${baseAdmin}/user/${year}/monthly`

export const getAppMonthlyRevenueAPI_URL = (year) =>
    `${baseAdmin}/revenue/monthly/${year}`

export const getTopPartnerRatingAPI_URL = (top) =>
    `${baseAdmin}/${top}/${partner}`
export const getTopServiceBookedAPI_URL = (top) =>
    `${baseBookings}/service/${top}`