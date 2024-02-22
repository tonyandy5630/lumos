import { object, string, ref } from 'yup'
import getRules from '../../rules/auth'
import { EMPTY_WARNING, PHONE_REGEX } from '@/constants/Auth'

const rules = getRules()

const UserSchema = object({
    email: string()
        .trim()
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message)
        .email('Not an email')
        .required(EMPTY_WARNING),
    password: string().trim().min(1).max(20).required(EMPTY_WARNING),
    fullname: string()
        .trim()
        .max(rules.name.maxLength.value, rules.name.maxLength.message)
        .required(EMPTY_WARNING),
    phone: string()
        .matches(PHONE_REGEX, 'Phone number is not valid')
        .min(rules.phone.minLength.value, rules.phone.minLength.message)
        .max(rules.phone.maxLength.value, rules.phone.maxLength.message),
    confirmPassword: string()
        .oneOf([ref('password'), null], 'Passwords must match')
        .min(1)
        .max(20)
        .required(EMPTY_WARNING),
})

export default UserSchema
