const { supplier } = require('.')

export const baseSuppliers = `${process.env.NEXT_PUBLIC_SERVER_URL}/${supplier}`

export const supplierProfile = `${baseSuppliers}/profile`
