import {
    getAdminDashBoardStatAPI_URL,
    getAppNewMonthlyUserAPI_URL,
} from '@/constants/API-URL/admin'
import http from '@/utils/http'

export const getAdminDashboardStatAPI = () =>
    http.get(getAdminDashBoardStatAPI_URL)

export const getAppNewMonthlyUserAPI = (year) =>
    http.get(getAppNewMonthlyUserAPI_URL(year))
