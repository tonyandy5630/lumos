'use client'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import GoogleIcon from '@mui/icons-material/Google'
import AUTH_URL from '@/constants/URL/auth'
import _ from 'lodash'
import { useAuth } from '@/Context'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { loginAPI } from '@/api/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import LoginSchema from '@/utils/schema/auth/loginSchema'
import ADMIN_URL from '@/constants/URL/admin'

export default function LoginPage() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        resetField,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(LoginSchema) })
    const { setUser } = useAuth()

    const loginMutation = useMutation({
        mutationKey: ['/login'],
        mutationFn: loginAPI,
    })

    const onSubmit = async (data) => {
        router.push(ADMIN_URL.HOMEPAGE)
        // try {
        //     await loginMutation.mutateAsync(data, {
        //         onSuccess: (data) => {
        //             setUser(data)
        //             reset()
        //         },
        //         onError: (error) => {
        //             console.log(error)
        //         },
        //     })
        // } catch (error) {
        //     resetField('password')
        // }
    }

    const onError = (error) => console.log(error)

    return (
        <div className="min-w-full min-h-full bg-primary">
            <Stack
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                className="h-screen min-w-full min-h-full py-5"
            >
                <Stack
                    justifyContent="space-around"
                    alignItems="center"
                    className="w-full min-h-full h-4/6"
                >
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Image
                            alt="lumos text"
                            src="/lumos_text.png"
                            width={400}
                            height={150}
                        />
                        <Typography
                            variant="h3"
                            className="font-bold text-mosh"
                        >
                            Welcome back
                        </Typography>
                    </Stack>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        className="w-7/12 py-3 bg-white/65 min-h-[26rem] rounded-3xl"
                    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            className="mt-3"
                        >
                            <Typography
                                variant="h4"
                                className="font-bold text-mosh"
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#107B6C',
                                }}
                            >
                                Log in
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontFamily: 'Poppins',
                                    color: '#107B6C',
                                }}
                            >
                                New to Lumos?{' '}
                                <Link
                                    href={AUTH_URL.REGISTER}
                                    className="underline text-mosh"
                                >
                                    Sign up for free
                                </Link>
                            </Typography>
                        </Stack>

                        <form
                            className="flex flex-col items-start justify-center space-y-5 w-4/6 min-h-[260px] "
                            onSubmit={handleSubmit(onSubmit, onError)}
                        >
                            <Stack className="min-w-full" spacing={1}>
                                <FormInput
                                    name="email"
                                    id="username"
                                    autocomplete="on"
                                    label="Email"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Email"
                                    autoFocus={true}
                                    helperText={errors.email?.message}
                                    helperTextIsError={
                                        errors.email !== undefined
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
                                    loading={loginMutation.isPending}
                                >
                                    Log in
                                </MyButton>
                                <MyButton
                                    variant="outlined"
                                    type="submit"
                                    className="!bg-white"
                                    handleClick={() => console.log()}
                                >
                                    <GoogleIcon sx={{ color: '#4285F4' }} />
                                    Continue with google
                                </MyButton>
                            </Stack>
                        </form>
                    </Stack>
                </Stack>
                <Image
                    alt="Doctor Images"
                    width={701}
                    height={610}
                    priority={true}
                    quality={100}
                    src="/doctor.png"
                />
            </Stack>
        </div>
    )
}
