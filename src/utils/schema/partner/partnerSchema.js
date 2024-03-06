import getRules from '@/utils/rules/partner'
import { object, string, number, array } from 'yup'
import ScheduleSchema from '../schedule/scheduleSchema'

const rules = getRules()

const Partner = object({
    partnerName: string()
        .required()
        .min(
            rules.partnerName.minLength.value,
            rules.partnerName.minLength.message
        )
        .max(
            rules.partnerName.maxLength.value,
            rules.partnerName.maxLength.message
        ),
    displayName: string()
        .required()
        .min(
            rules.displayName.minLength.value,
            rules.displayName.minLength.message
        )
        .max(
            rules.displayName.maxLength.value,
            rules.displayName.maxLength.message
        ),
    typeId: number().required(),
    email: string()
        .required()
        .matches(rules.email.pattern.value, rules.email.pattern.message)
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message),
    phone: string()
        .required()
        .matches(rules.phone.pattern.value, rules.phone.pattern.message)
        .min(rules.phone.minLength.value, rules.phone.minLength.message)
        .max(rules.phone.maxLength.value, rules.phone.maxLength.message),
    address: string()
        .required()
        .min(rules.address.minLength.value, rules.address.minLength.message)
        .max(rules.address.maxLength.value, rules.address.maxLength.message),
    businessLicenseNumber: string()
        .required()
        .matches(
            rules.licenseNumber.pattern.value,
            rules.licenseNumber.pattern.message
        ),
})

const PartnerSchema = object({
    partner: Partner,
    schedules: array()
        .required('Schedule is required')
        .min(1, 'Schedule is required')
        .of(
            object({
                workShift: number().required(),
                dayOfWeek: number().required(),
            })
        ),
})

export default PartnerSchema
