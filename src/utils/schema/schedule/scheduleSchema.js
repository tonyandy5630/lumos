import { object, string, array, number } from 'yup'

const ScheduleSchema = object({
    schedules: array()
        .required()
        .of(
            object({
                workShift: number().required(),
                dayOfWeek: number().required(),
            })
        ),
})

export default ScheduleSchema
