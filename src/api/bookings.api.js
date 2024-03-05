import {
    acceptBooking_API_URL,
    declineBookingAPI_URL,
    getBookingDetailAPI_URL,
} from '@/constants/API-URL/bookings'
import http from '@/utils/http'

export const acceptBookingAPI = (body) => http.post(acceptBooking_API_URL, body)
export const getBookingDetailAPI = (id) => http.get(getBookingDetailAPI_URL(id))
export const declineBookingAPI = (id) => http.get(declineBookingAPI_URL(id))
