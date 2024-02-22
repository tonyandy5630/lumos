'use client'
import React from 'react'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import Stack from '@mui/material/Stack'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import dynamic from 'next/dynamic'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { registerAPI } from '@/api/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import UserSchema from '@/utils/schema/auth/userSchema'
const { toast } = dynamic(() => import('react-toastify'))

export default function SignUpForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(UserSchema) })

    const registerMutation = useMutation({
        mutationKey: ['/register'],
        mutationFn: registerAPI,
    })

    const onSubmit = async (data) => {
        try {
            await registerMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    const status = data.data.statusCode
                    if (status === 200) {
                        toast.success('Register successfully', {
                            position: 'top-center',
                            autoClose: 2000,
                        })
                        reset()
                    }
                },
                onError: (error) => {
                    console.log()
                },
            })
        } catch (error) {}
    }
    return (
        <form
            className="flex flex-col items-start justify-center space-y-5 w-4/6 min-h-[260px] "
            onSubmit={handleSubmit(onSubmit)}
        >
            <Stack className="min-w-full" spacing={2}>
                <FormInput
                    name="fullname"
                    id="fullname"
                    autocomplete="on"
                    label="Fullname"
                    isRequired={true}
                    register={register}
                    placeholder="Enter fullname name"
                    helperText={errors.fullname?.message}
                    helperTextIsError={errors.fullname !== undefined}
                />
                <FormInput
                    name="email"
                    id="email"
                    autocomplete="on"
                    label="Email"
                    isRequired={true}
                    register={register}
                    placeholder="Enter email"
                    helperText={errors.email?.message}
                    helperTextIsError={errors.email !== undefined}
                />
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
                <FormInput
                    name="password"
                    id="password"
                    autocomplete="on"
                    label="Password"
                    inputType="password"
                    isRequired={true}
                    register={register}
                    placeholder="Enter password"
                    helperText={errors.password?.message}
                    helperTextIsError={errors.password !== undefined}
                />
                <FormInput
                    name="confirmPassword"
                    id="confirmPassword"
                    autocomplete="on"
                    label="Confirm password"
                    inputType="password"
                    isRequired={true}
                    register={register}
                    placeholder="Confirm password"
                    helperText={errors.confirmPassword?.message}
                    helperTextIsError={errors.confirmPassword !== undefined}
                >
                    <Typography
                        component={Link}
                        href="/forget-password"
                        className="text-sm font-semibold underline text-mosh"
                        sx={{ fontFamily: 'Poppins' }}
                    >
                        Forget password
                    </Typography>
                </FormInput>
            </Stack>
            <Stack className="min-w-full" spacing={1}>
                <MyButton
                    type="submit"
                    className="hover:bg-mosh hover:text-white"
                    loading={registerMutation.isPending}
                >
                    Sign up
                </MyButton>
                <MyButton
                    variant="outlined"
                    className="!bg-white border border-black border-solid"
                    loading={registerMutation.isPending}
                    handleClick={() => console.log()}
                >
                    Continue with google
                </MyButton>
            </Stack>
        </form>
    )
}
