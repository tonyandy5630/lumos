import {
    basePartner,
    basePartnerService,
    getPartnerPendingBookingAPI_URL,
    getPartnerServicesAPI_URL,
    getStatPartnerServiceAPI_URL,
} from '@/constants/API-URL/partner'
import http from '@/utils/http'

export const addPartnerServiceAPI = (body) =>
    http.post(basePartnerService, body)

export const getPartnerServicesAPI = () => http.get(getPartnerServicesAPI_URL)

export const getStatPartnerServiceAPI = () =>
    http.get(getStatPartnerServiceAPI_URL)

export const addPartnerAPI = (body) => http.post(basePartner, body)

export const getPartnerPendingBookingsAPI = () =>
    http.get(getPartnerPendingBookingAPI_URL)
