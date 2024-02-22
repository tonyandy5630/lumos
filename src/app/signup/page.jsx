'use client'
import React from 'react'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { registerAPI } from '@/api/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import UserSchema from '@/utils/schema/auth/userSchema'
import { toast } from 'react-toastify'

export default function SignupPage() {
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
        <div className="flex items-center justify-center min-w-full min-h-full bg-primary">
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className="h-screen w-[90vw] min-h-full py-5"
            >
                <Stack
                    justifyContent="space-around"
                    alignItems="center"
                    className="w-full min-h-full h-4/6"
                >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        className="w-10/12 py-3 bg-white/65 min-h-[26rem] rounded-3xl"
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            className="my-4"
                        >
                            <Typography
                                variant="h5"
                                className="font-bold text-mosh"
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#107B6C',
                                }}
                            >
                                Sign up with email address
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#107B6C',
                                }}
                            >
                                Already has an account?{' '}
                                <Link
                                    href="/login"
                                    className="underline text-mosh"
                                >
                                    Login
                                </Link>
                            </Typography>
                        </Stack>
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
                                    helperTextIsError={
                                        errors.fullname !== undefined
                                    }
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
                                    helperTextIsError={
                                        errors.email !== undefined
                                    }
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
                                    helperTextIsError={
                                        errors.phone !== undefined
                                    }
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
                                    helperTextIsError={
                                        errors.password !== undefined
                                    }
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
                                    helperTextIsError={
                                        errors.confirmPassword !== undefined
                                    }
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
                    </Stack>
                </Stack>
                <Image
                    alt="Doctor Images"
                    width={700}
                    height={610}
                    priority={true}
                    quality={100}
                    src="/doctor.png"
                />
            </Stack>
        </div>
    )
}
