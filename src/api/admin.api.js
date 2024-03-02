import {
    getAdminDashBoardStatAPI_URL,
    getAppMonthlyRevenueAPI_URL,
    getAppNewMonthlyUserAPI_URL,
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
