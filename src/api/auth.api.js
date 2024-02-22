import { loginAPI_URL, registerAPI_URL } from '@/constants/API-URL/auth'
import http from '@/utils/http'

export const loginAPI = ({ email, password }) =>
    http.post(loginAPI_URL, { email, password })

export const registerAPI = (body) => http.post(registerAPI_URL, body)
