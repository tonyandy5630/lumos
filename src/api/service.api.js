import { service } from '@/constants/API-URL'
import { getServiceDetailAPI_URL } from '@/constants/API-URL/service'
import http from '@/utils/http'

export const getPartnerServiceDetailAPI = (id) =>
    http.get(getServiceDetailAPI_URL(id))

export const deletePartnerServiceAPI = (id) => http.delete(service + `/${id}`)
