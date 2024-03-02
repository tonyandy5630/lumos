import { admin } from '.'

export const baseAdmin = `${process.env.NEXT_PUBLIC_SERVER_URL}/${admin}`

export const getAdminDashBoardStatAPI_URL = `${baseAdmin}/dashboard/stat`
