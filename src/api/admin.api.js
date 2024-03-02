import { getAdminDashBoardStatAPI_URL } from '@/constants/API-URL/admin'
import http from '@/utils/http'

export const getAdminDashboardStatAPI = () =>
    http.get(getAdminDashBoardStatAPI_URL)
