import {
    progressToNextBookingStatusAPI_URL,
    declineBookingAPI_URL,
    getBookingDetailAPI_URL,
} from '@/constants/API-URL/bookings'
import http from '@/utils/http'

export const progressToNextBookingStatusAPI = (body) =>
    http.post(progressToNextBookingStatusAPI_URL, body)
export const getBookingDetailAPI = (id) => http.get(getBookingDetailAPI_URL(id))
export const declineBookingAPI = (id) =>
    http.post(declineBookingAPI_URL(id), {
        cancellationReason: 'Done by Partner',
    })
