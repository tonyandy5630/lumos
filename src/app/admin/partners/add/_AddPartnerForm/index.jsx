'use client'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { addPartnerAPI } from '@/api/partner.api'
import { toast } from 'react-toastify'
import PartnerSchema from '@/utils/schema/partner/partnerSchema'
import FormRow from '@/components/FormRow'
import InputWrapper from '@/components/InputWrapper'
import FormInput from '@/components/FormInput'
import MyButton from '@/components/Button'
import { handleErrorMutation } from '@/utils/handleErrors'

export default function AddPartnerForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PartnerSchema),
        defaultValues: {
            typeId: 1,
        },
    })

    const addPartnerMutation = useMutation({
        mutationKey: ['/partner/add'],
        mutationFn: addPartnerAPI,
    })

    const onSubmit = async (body) => {
        try {
            await addPartnerMutation.mutateAsync(body, {
                onSuccess: (data) => {
                    toast.success(data.data.data.message)
                    reset()
                },
                onError: (error) => {
                    const errors = error.response.data.data
                    for (const [key, value] of Object.entries(errors)) {
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
            handleErrorMutation(error)
        }
    }

    return (
        <form
            className="flex flex-col items-start justify-between space-y-5 min-w-full  min-h-[190px] "
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormRow>
                <InputWrapper full={true}>
                    <FormRow justifyContent="start" pr={0}>
                        <InputWrapper className="items-start">
                            <FormInput
                                name="partnerName"
                                id="partnerName"
                                autocomplete="on"
                                label="Partner Name"
                                isRequired={true}
                                register={register}
                                placeholder="Enter Partner Name"
                                helperText={errors.partnerName?.message}
                                helperTextIsError={
                                    errors.partnerName !== undefined
                                }
                                autoFocus={true}
                            />
                        </InputWrapper>
                    </FormRow>
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="email"
                        id="email"
                        autocomplete="on"
                        label="Email"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Email"
                        helperText={errors.email?.message}
                        helperTextIsError={errors.email !== undefined}
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="businessLicenseNumber"
                        id="businessLicenseNumber"
                        autocomplete="on"
                        label="License Number"
                        isRequired={true}
                        register={register}
                        placeholder="Enter License Number"
                        helperText={errors.businessLicenseNumber?.message}
                        helperTextIsError={
                            errors.businessLicenseNumber !== undefined
                        }
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="displayName"
                        id="displayName"
                        autocomplete="on"
                        label="Display Name"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Display Name"
                        helperText={errors.displayName?.message}
                        helperTextIsError={errors.displayName !== undefined}
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="phone"
                        id="phone"
                        autocomplete="on"
                        label="Phone"
                        isRequired={true}
                        register={register}
                        placeholder="Enter phone"
                        helperText={errors.phone?.message}
                        helperTextIsError={errors.phone !== undefined}
                    />
                </InputWrapper>
                <InputWrapper full={true}>
                    <FormInput
                        name="address"
                        id="address"
                        autocomplete="on"
                        label="Address"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Address Name"
                        helperText={errors.address?.message}
                        helperTextIsError={errors.address !== undefined}
                    />
                </InputWrapper>
            </FormRow>
            <div className="flex items-center justify-start space-x-2 w-fit">
                <MyButton
                    type="submit"
                    className="hover:bg-mosh hover:text-white !min-w-[90px] max-w-5"
                    loading={addPartnerMutation.isPending}
                >
                    Add
                </MyButton>
                <MyButton
                    variant="outlined"
                    className="!bg-white border border-black border-solid !min-w-[90px] max-w-5"
                    loading={addPartnerMutation.isPending}
                    type="reset"
                >
                    Reset
                </MyButton>
            </div>
        </form>
    )
}
