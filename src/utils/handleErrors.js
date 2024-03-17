import { HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'

export const handleErrorMutation = (error) => {
    const errorObject = error.response
    if (errorObject.status !== HttpStatusCode.Conflict) {
        toast.error(errorObject.data.data.message, { autoClose: 1000 })
    }
}
