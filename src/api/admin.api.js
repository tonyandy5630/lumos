import {
    getAdminDashBoardStatAPI_URL,
    getAppBookingsAPI_URL,
    getAppMonthlyRevenueAPI_URL,
    getAppNewMonthlyUserAPI_URL,
    getRefundListAPI_URL,
    getTopPartnerRatingAPI_URL,
    getTopServiceBookedAPI_URL,
} from '@/constants/API-URL/admin'
import http from '@/utils/http'

export const getAdminDashboardStatAPI = () =>
    http.get(getAdminDashBoardStatAPI_URL)

export const getAppNewMonthlyUserAPI = (year) =>
    http.get(getAppNewMonthlyUserAPI_URL(year))

export const getAppRevenueMonthlyAPI = (year) =>
    http.get(getAppMonthlyRevenueAPI_URL(year))

export const getTopPartnerRatingAPI = (top) =>
    http.get(getTopPartnerRatingAPI_URL(top))

export const getTopServiceBookedAPI = (top) =>
    http.get(getTopServiceBookedAPI_URL(top))

export const getRefundListAPI = () => http.get(getRefundListAPI_URL)

export const getAppBookingsAPI = (page, pageSize) =>
    http.get(getAppBookingsAPI_URL(page, pageSize))
