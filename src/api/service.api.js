import { getServiceDetailAPI_URL } from '@/constants/API-URL/service'
import http from '@/utils/http'

export const getPartnerServiceDetailAPI = (id) =>
    http.get(getServiceDetailAPI_URL(id))
