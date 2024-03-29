import { admin, partner } from '.'
import root from '.'
import { baseBookings } from './bookings'

export const baseAdmin = `${root}/${admin}`

export const getAdminDashBoardStatAPI_URL = `${baseAdmin}/dashboard/stat`

export const getAppNewMonthlyUserAPI_URL = (year) =>
    `${baseAdmin}/user/${year}/monthly`

export const getAppMonthlyRevenueAPI_URL = (year) =>
    `${baseAdmin}/revenue/monthly/${year}`

export const getTopPartnerRatingAPI_URL = (top) =>
    `${baseAdmin}/${top}/${partner}`
export const getTopServiceBookedAPI_URL = (top) =>
    `${baseBookings}/service/${top}`

export const getRefundListAPI_URL = `${baseAdmin}/refundlist`

export const getAppBookingsAPI_URL = (page, pageSize) =>
    `${baseAdmin}/bookings?page=${page}&PageSize=${pageSize}`

export const getAllPartnersAPI_URL = (page, pageSize) =>
    `${baseAdmin}/partners?page=${page + 1}&pageSize=${pageSize}`
