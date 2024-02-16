class LocalStorageUtils {
    static getTokenFromLS = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('lumos') ?? 'test'
        }
        return ''
    }
}

export default LocalStorageUtils
