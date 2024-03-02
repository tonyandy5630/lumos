import { admin } from '.'

export const baseAdmin = `${process.env.NEXT_PUBLIC_SERVER_URL}/${admin}`

export const getAdminDashBoardStatAPI_URL = `${baseAdmin}/dashboard/stat`

export const getAppNewMonthlyUserAPI_URL = (year) =>
    `${baseAdmin}/user/${year}/monthly`

export const getAppMonthlyRevenueAPI_URL = (year) =>
    `${baseAdmin}/revenue/monthly/${year}`
