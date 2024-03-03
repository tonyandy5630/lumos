import { auth } from '.'
import root from '.'

export const baseAuth = `${root}/${auth}`

export const loginAPI_URL = `${baseAuth}/login`
export const registerAPI_URL = `${baseAuth}/register`
