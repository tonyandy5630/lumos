export const supplier = 'supplier'
export const auth = 'auth'
export const partner = 'partner'
export const category = 'category'
export const booking = 'booking'
export const stat = 'stat'
export const service = partner + '/service'
export const admin = 'admin'

const root = `${
    process.env.NODE_ENV == 'development'
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}`
        : `${process.env.NEXT_PUBLIC_PROD_SERVER_URL}`
}`

export const baseCategory = `${root}/${category}`

export default root
