'use client'
import dynamic from 'next/dynamic'
import { memo, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { addPartnerAPI } from '@/api/partner.api'
import PartnerSchema from '@/utils/schema/partner/partnerSchema'
import FormRow from '@/components/FormRow'
import InputWrapper from '@/components/InputWrapper'
import FormInput from '@/components/FormInput'
import MyButton from '@/components/Button'
import { toast } from 'react-toastify'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { handleErrorMutation } from '@/utils/handleErrors'
const AddSchedule = dynamic(() => import('../_AddSchedule'))

function AddPartnerForm(props) {
    const [schedule, setSchedules] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PartnerSchema),
        defaultValues: {
            partner: {
                typeId: 1,
            },
        },
    })

    const handleGetSchedule = (value) => {
        setSchedules(value)
        setValue('schedules', value)
    }

    const addPartnerMutation = useMutation({
        mutationKey: ['/partner/add'],
        mutationFn: addPartnerAPI,
    })

    const onSubmit = async (body) => {
        body.schedules = schedule
        console.log(body)
        try {
            await addPartnerMutation.mutateAsync(body, {
                onSuccess: (data) => {
                    toast.success(data.data.message, {
                        autoClose: 700,
                    })
                    toast.onChange((payload) => {
                        if (payload.status === 'removed') location.reload()
                    })
                },
                onError: (error) => {
                    const partnerError = error.response.data.data
                    console.log(error)
                    for (const [key, value] of Object.entries(partnerError)) {
                        if (value !== null) {
                            setError(key, {
                                type: 'custom',
                                message: value,
                            })
                        }
                    }
                },
            })
        } catch (error) {
            console.log(error)
            handleErrorMutation(error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-full p-5 ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-start justify-between space-y-5 min-w-full  min-h-[190px] "
            >
                <FormRow>
                    <InputWrapper full={true}>
                        <FormRow justifyContent="start" pr={0}>
                            <InputWrapper className="items-start">
                                <FormInput
                                    name="partner.partnerName"
                                    id="partnerName"
                                    autocomplete="on"
                                    label="Partner Name"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Enter Partner Name"
                                    helperText={
                                        errors?.partner?.partnerName?.message
                                    }
                                    helperTextIsError={
                                        errors?.partner?.partnerName !==
                                        undefined
                                    }
                                    autoFocus={true}
                                />
                            </InputWrapper>
                        </FormRow>
                    </InputWrapper>
                    <InputWrapper>
                        <FormInput
                            name="partner.email"
                            id="email"
                            autocomplete="on"
                            label="Email"
                            isRequired={true}
                            register={register}
                            placeholder="Enter Email"
                            helperText={errors?.partner?.email?.message}
                            helperTextIsError={
                                errors?.partner?.email !== undefined
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormInput
                            name="partner.businessLicenseNumber"
                            id="businessLicenseNumber"
                            autocomplete="on"
                            label="License Number"
                            isRequired={true}
                            register={register}
                            placeholder="Enter License Number"
                            helperText={
                                errors?.partner?.businessLicenseNumber?.message
                            }
                            helperTextIsError={
                                errors?.partner?.businessLicenseNumber !==
                                undefined
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormInput
                            name="partner.displayName"
                            id="displayName"
                            autocomplete="on"
                            label="Display Name"
                            isRequired={true}
                            register={register}
                            placeholder="Enter Display Name"
                            helperText={errors?.partner?.displayName?.message}
                            helperTextIsError={
                                errors?.partner?.displayName !== undefined
                            }
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <FormInput
                            name="partner.phone"
                            id="phone"
                            autocomplete="on"
                            label="Phone"
                            isRequired={true}
                            register={register}
                            placeholder="Enter phone"
                            helperText={errors?.partner?.phone?.message}
                            helperTextIsError={
                                errors?.partner?.phone !== undefined
                            }
                        />
                    </InputWrapper>
                    <InputWrapper full={true}>
                        <FormInput
                            name="partner.address"
                            id="address"
                            autocomplete="on"
                            label="Address"
                            isRequired={true}
                            register={register}
                            placeholder="Enter Address Name"
                            helperText={errors?.partner?.address?.message}
                            helperTextIsError={
                                errors?.partner?.address !== undefined
                            }
                        />
                    </InputWrapper>
                </FormRow>
                <AddSchedule
                    error={
                        errors.schedules?.message || schedule.length === 0
                            ? errors.schedules?.message
                            : undefined
                    }
                    onGetSchedule={handleGetSchedule}
                />
                <div className="flex self-start justify-between w-6/12 py-6">
                    <div className="w-16">
                        <MyButton
                            type="submit"
                            loading={addPartnerMutation.isPending}
                        >
                            Submit
                        </MyButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPartnerForm
