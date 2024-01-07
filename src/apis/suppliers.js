const { supplierProfile } = require('@/constants/API-URL/supplier')
const { default: http } = require('@/utils/http')

export const getSupplierProfile = () => http.get(supplierProfile)
