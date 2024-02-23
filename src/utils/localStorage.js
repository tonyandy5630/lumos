class LocalStorageUtils {
    static getTokenFromLS = () => {
        if (typeof window !== 'undefined') {
            return (
                localStorage.getItem(
                    process.env.NEXT_PUBLIC_access_token_name
                ) ?? ''
            )
        }
        return ''
    }

    static setTokenToLS = (token) => {
        if (typeof window !== 'undefined') {
            return localStorage.setItem(
                process.env.NEXT_PUBLIC_access_token_name,
                token
            )
        }
        return ''
    }
}

export default LocalStorageUtils
