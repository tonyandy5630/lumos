import { acceptBooking_API_URL } from '@/constants/API-URL/bookings'
import http from '@/utils/http'

export const acceptBookingAPI = (body) => http.post(acceptBooking_API_URL, body)
