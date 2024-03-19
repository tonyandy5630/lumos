import { partner, service, stat, booking } from '.'
import root from '.'
import { baseBookings } from './bookings'
export const basePartner = `${root}/${partner}`
export const basePartnerService = `${root}/${service}`
export const baseStat = `${root}/${stat}`

export const getStatPartnerServiceAPI_URL = `${baseStat}/${service}s`
export const getPartnerRevenueAPI_URL = `${partner}/revenue`
export const getPartnerServicesAPI_URL = `${basePartnerService}s`

export const getPartnerStatusBookingAPI_URL = (status) =>
    `${basePartner}/${booking}s/status/${status}`

export const partnerGetAllBookingsAPI_URL = (page) =>
    basePartner + `/${booking}s` + `/${page + 1}`

export const addScheduleAPI_URL = `${basePartner}/schedule`

export const getPartnerBillsAPI_URL = `${baseBookings}/bill`

export const getPartnerRevenueChartAPI_URL = (month, year) =>
    `${basePartner}/revenue/${month}?year=${year}`
