import { LENGTH_WARNING, PHONE_LENGTH_WARNING } from '@/constants/Auth'

const getRules = (getValues) => ({
    code: {
        minLength: {
            value: 4,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
    },
    serviceName: {
        maxLength: {
            value: 20,
            message: LENGTH_WARNING,
        },
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
    },
    price: {
        min: {
            limit: 0,
            message: 'Price is not valid',
        },
        max: {
            limit: 3000000,
            message: 'Price is too large',
        },
    },
    duration: {
        min: {
            limit: 10,
            message: 'Duration is too short',
        },
        max: {
            limit: 180,
            message: 'Duration is too long',
        },
    },
    description: {
        minLength: {
            value: 0,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 100,
            message: LENGTH_WARNING,
        },
    },
    categories: {
        min: 1,
        message: 'Choose a category',
    },
})

export default getRules
