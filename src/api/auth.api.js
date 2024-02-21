import { loginAPI_URL } from '@/constants/API-URL/auth'
import http from '@/utils/http'

export const loginAPI = ({ email, password }) =>
    http.post(loginAPI_URL, { email, password })
