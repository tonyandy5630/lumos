class LocalStorageUtils {
    constructor() {
        this.a_token =
            process.env.NODE_ENV === 'development'
                ? process.env.NEXT_PUBLIC_dev_token
                : process.env.NEXT_PUBLIC_lumos_name
    }

    getTokenFromLS = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(this.a_token)
        }
        return ''
    }

    setTokenToLS = (token) => {
        if (typeof window !== 'undefined') {
            return localStorage.setItem(this.a_token, token)
        }
        return ''
    }

    removeTokenFromLS = () => {
        if (typeof window !== 'undefined') {
            return localStorage.removeItem(this.a_token)
        }
        return ''
    }
}

export default LocalStorageUtils
