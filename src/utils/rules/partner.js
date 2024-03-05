import {
    BUSINESS_LICENSE_REGEX,
    EMAIL_REGEX,
    LENGTH_WARNING,
    PHONE_LENGTH_WARNING,
    PHONE_REGEX,
} from '@/constants/Auth'

const MIN_NAME = 6
const MAX_NAME = 50
const NAME_LENGTH_WARNING = LENGTH_WARNING(MIN_NAME, MAX_NAME)

const MIN_ADDRESS = 6
const MAX_ADDRESS = 100
const NAME_ADDRESS_WARNING = LENGTH_WARNING(MIN_ADDRESS, MAX_ADDRESS)

const getRules = () => ({
    partnerName: {
        minLength: {
            value: MIN_NAME,
            message: NAME_LENGTH_WARNING,
        },
        maxLength: {
            value: MAX_NAME,
            message: NAME_LENGTH_WARNING,
        },
    },
    displayName: {
        minLength: {
            value: MIN_NAME,
            message: NAME_LENGTH_WARNING,
        },
        maxLength: {
            value: MAX_NAME,
            message: NAME_LENGTH_WARNING,
        },
    },
    email: {
        minLength: {
            value: 0,
            message: 'Email is required',
        },
        maxLength: {
            value: 100,
            message: 'Email is too long',
        },
        pattern: {
            value: EMAIL_REGEX,
            message: `Not a valid email format`,
        },
    },
    phone: {
        minLength: {
            value: 10,
            message: PHONE_LENGTH_WARNING,
        },
        maxLength: {
            value: 13,
            message: PHONE_LENGTH_WARNING,
        },
        pattern: {
            value: PHONE_REGEX,
            message: `Not a valid phone format`,
        },
    },
    address: {
        minLength: {
            value: MIN_ADDRESS,
            message: NAME_ADDRESS_WARNING,
        },
        maxLength: {
            value: MAX_ADDRESS,
            message: NAME_ADDRESS_WARNING,
        },
    },
    licenseNumber: {
        pattern: {
            value: BUSINESS_LICENSE_REGEX,
            message: 'Not a valid license',
        },
    },
})

export default getRules
