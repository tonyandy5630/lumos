import { partner, service, stat, booking } from '.'
import root from '.'

export const basePartner = `${root}/${partner}`
export const basePartnerService = `${root}/${service}`
export const baseStat = `${root}/${stat}`

export const getStatPartnerServiceAPI_URL = `${baseStat}/${service}s`
export const getPartnerRevenueAPI_URL = `${partner}/revenue`
export const getPartnerServicesAPI_URL = `${basePartnerService}s`
export const getPartnerPendingBookingAPI_URL = `${basePartner}/${booking}s/pending`
