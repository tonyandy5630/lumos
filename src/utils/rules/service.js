import { LENGTH_WARNING } from '@/constants/Auth'

const MIN_PRICE = 0
const MAX_PRICE = 3000000

const MIN_DURATION = 10
const MAX_DURATION = 180

const MIN_DESC = 0
const MAX_DESC = 180
const DESC_LENGTH_WARNING = LENGTH_WARNING(MIN_DESC, MAX_DESC)

const MIN_NAME = 6
const MAX_NAME = 50
const NAME_LENGTH_WARNING = LENGTH_WARNING(MIN_NAME, MAX_NAME)

const getRules = (getValues) => ({
    serviceName: {
        maxLength: {
            value: MAX_NAME,
            message: NAME_LENGTH_WARNING,
        },
        minLength: {
            value: MIN_NAME,
            message: NAME_LENGTH_WARNING,
        },
    },
    price: {
        min: {
            limit: MIN_PRICE,
            message: 'Price is not valid',
        },
        max: {
            limit: MAX_PRICE,
            message: 'Price is too large',
        },
    },
    duration: {
        min: {
            limit: MIN_DURATION,
            message: 'Duration is too short',
        },
        max: {
            limit: MAX_DURATION,
            message: 'Duration is too long',
        },
    },
    description: {
        minLength: {
            value: MIN_DESC,
            message: DESC_LENGTH_WARNING,
        },
        maxLength: {
            value: MAX_DESC,
            message: DESC_LENGTH_WARNING,
        },
    },
    categories: {
        min: 1,
        message: 'Choose a category',
    },
})

export default getRules
