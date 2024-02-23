import { baseCategory } from '@/constants/API-URL'
import http from '@/utils/http'

export const getAllCategoryAPI = () => http.get(baseCategory)
