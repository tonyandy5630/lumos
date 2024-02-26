import { partner, service, stat } from '.'

export const basePartner = `${process.env.NEXT_PUBLIC_SERVER_URL}/${partner}`
export const basePartnerService = `${process.env.NEXT_PUBLIC_SERVER_URL}/${service}`
export const baseStat = `${process.env.NEXT_PUBLIC_SERVER_URL}/${stat}`

export const getStatPartnerServiceAPI_URL = `${baseStat}/${service}s`
export const getPartnerRevenueAPI_URL = `${partner}/revenue`
export const getPartnerServicesAPI_URL = `${basePartnerService}s`
