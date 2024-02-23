import { addPartnerServiceAPI_URL } from '@/constants/API-URL/partner'
import http from '@/utils/http'

export const addPartnerServiceAPI = (body) =>
    http.post(addPartnerServiceAPI_URL, body)
