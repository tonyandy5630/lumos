import { auth } from '.'

export const baseAuth = `${process.env.NEXT_PUBLIC_SERVER_URL}/${auth}`

export const loginAPI_URL = `${baseAuth}/login`
export const registerAPI_URL = `${baseAuth}/register`
