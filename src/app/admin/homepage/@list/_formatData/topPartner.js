export const formatTopPartnerData = (data) => {
    const { code, displayName, email, rating, partnerId } = data
    return {
        partnerId,
        code,
        displayName,
        email,
        rating,
    }
}
