import { object, string, array, number } from 'yup'
import getRules from '../../rules/service'
import { EMPTY_WARNING } from '@/constants/Auth'

const rules = getRules()

const ServiceSchema = object({
    serviceId: number().required(),
    duration: number()
        .min(rules.duration.min.limit, rules.duration.min.message)
        .max(rules.duration.max.limit, rules.duration.max.message)
        .round('floor')
        .required(EMPTY_WARNING),
    name: string()
        .trim()
        .max(
            rules.serviceName.maxLength.value,
            rules.serviceName.maxLength.message
        )
        .required(EMPTY_WARNING),
    price: number('Must be a round number')
        .integer('Must be a round number')
        .max(rules.price.max.limit, rules.price.max.limit.message)
        .min(rules.price.min.limit, rules.price.min.limit.message)
        .required(EMPTY_WARNING),
    description: string()
        .trim()
        .min(
            rules.description.minLength.value,
            rules.description.minLength.message
        )
        .max(
            rules.description.maxLength.value,
            rules.description.maxLength.message
        ),
    categories: array(number()).required(EMPTY_WARNING),
})

export const UpdateServiceSchema = ServiceSchema.omit(['categories'])

export default ServiceSchema.omit(['serviceId'])
