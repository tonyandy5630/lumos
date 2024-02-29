import {
    BUSINESS_LICENSE_REGEX,
    EMAIL_REGEX,
    LENGTH_WARNING,
    PHONE_LENGTH_WARNING,
    PHONE_REGEX,
} from '@/constants/Auth'

const getRules = () => ({
    partnerName: {
        minLength: {
            value: 5,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 50,
            message: LENGTH_WARNING,
        },
    },
    displayName: {
        minLength: {
            value: 5,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 50,
            message: LENGTH_WARNING,
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
            value: 5,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 100,
            message: LENGTH_WARNING,
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
