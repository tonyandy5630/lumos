import {
    basePartner,
    basePartnerService,
    getPartnerStatusBookingAPI_URL,
    getPartnerServicesAPI_URL,
    getStatPartnerServiceAPI_URL,
    partnerGetAllBookingsAPI_URL,
} from '@/constants/API-URL/partner'
import http from '@/utils/http'

export const addPartnerServiceAPI = (body) =>
    http.post(basePartnerService, body)

export const getPartnerServicesAPI = () => http.get(getPartnerServicesAPI_URL)

export const getStatPartnerServiceAPI = () =>
    http.get(getStatPartnerServiceAPI_URL)

export const addPartnerAPI = (body) => http.post(basePartner, body)

export const getPartnerStatusBookingsAPI = (status) =>
    http.get(getPartnerStatusBookingAPI_URL(status))

export const getPartnerBookingsAPI = (page) =>
    http.get(partnerGetAllBookingsAPI_URL(page))
