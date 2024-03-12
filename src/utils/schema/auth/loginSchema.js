import { object, string } from 'yup'
import getRules from '../../rules/auth'
import { EMPTY_WARNING, PHONE_REGEX } from '@/constants/Auth'

const rules = getRules()

const LoginSchema = object({
    email: string()
        .trim()
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message)
        .email('Not an email')
        .required(EMPTY_WARNING),
    password: string()
        .trim()
        .min(rules.pwd.minLength.value, rules.pwd.minLength.message)
        .max(rules.pwd.maxLength.value, rules.pwd.maxLength.message)
        .required(EMPTY_WARNING),
})

export default LoginSchema
