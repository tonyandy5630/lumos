import axios, { HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import LocalStorageUtils from './localStorage'

const storage = new LocalStorageUtils()
class Http {
    constructor() {
        this.instance = axios.create({
            baseURL:
                process.env.NODE_ENV === 'development'
                    ? process.env.NEXT_PUBLIC_SERVER_URL
                    : process.env.NEXT_PUBLIC_PROD_SERVER_URL,
            timeout: 10000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        this.instance.interceptors.request.use(
            (config) => {
                const latestToken = storage.getTokenFromLS()
                if (latestToken !== '' && config.headers) {
                    config.headers.Authorization = `Bearer ${latestToken}`
                    return config
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )

        this.instance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (
                    error.response?.status !==
                        HttpStatusCode.UnprocessableEntity &&
                    error.response?.status !== HttpStatusCode.Conflict &&
                    error.response?.status !== HttpStatusCode.BadRequest
                ) {
                    const data = error?.response?.data
                    const message = data?.message || error?.message
                    toast.error(message, {
                        toastId: data?.message ? data?.message : error?.message,
                    })
                }
                return Promise.reject(error)
            }
        )
    }
}

const http = new Http().instance
export default http
