export const EMAIL_REGEX = /^\S+@\S+\.\S+$/
export const PHONE_REGEX = /^(?:\+?\d{10,15}|\d{10})$/
export const BUSINESS_LICENSE_REGEX = /^\d{10}$/

export const LENGTH_WARNING = (min, max) =>
    `At least ${min} - ${max} characters`
export const EMPTY_WARNING = 'Required'

export const PHONE_LENGTH_WARNING = 'Phone number is from 10 - 13 number'

export const GOOGLE_CONSENT =
    'https://api.domain.com/identity/v1/account/external-login?provider=Google&returnUrl=/home'
