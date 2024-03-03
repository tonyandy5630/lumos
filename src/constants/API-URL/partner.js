import { partner, service, stat, booking } from '.'
import root from '.'
import BookingStatus from '@/constants/BookingStatus.const'
export const basePartner = `${root}/${partner}`
export const basePartnerService = `${root}/${service}`
export const baseStat = `${root}/${stat}`

export const getStatPartnerServiceAPI_URL = `${baseStat}/${service}s`
export const getPartnerRevenueAPI_URL = `${partner}/revenue`
export const getPartnerServicesAPI_URL = `${basePartnerService}s`

export const GetPartnerStatusBookingAPI_URL = (status) =>
    `${basePartner}/${booking}s/status/${status}`
