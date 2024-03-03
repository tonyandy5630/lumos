class LocalStorageUtils {
    static getTokenFromLS = () => {
        if (typeof window !== 'undefined') {
            const t =
                process.env.NODE_ENV === 'development'
                    ? process.env.NEXT_PUBLIC_dev_token
                    : process.env.NEXT_PUBLIC_lumos_name
            return localStorage.getItem(t) ?? ''
        }
        return ''
    }
    static setTokenToLS = (token) => {
        if (typeof window !== 'undefined') {
            const t =
                process.env.NODE_ENV === 'development'
                    ? process.env.NEXT_PUBLIC_dev_token
                    : process.env.NEXT_PUBLIC_lumos_name
            return localStorage.setItem(t, token)
        }
        return ''
    }
}

export default LocalStorageUtils
