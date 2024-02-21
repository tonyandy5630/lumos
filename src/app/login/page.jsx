'use client'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import ProtectedRoute from '@/components/ProtectedRoutes'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import GoogleIcon from '@mui/icons-material/Google'

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        formState: { errors },
    } = useForm()

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
                                    href="/register"
                                    className="underline text-mosh"
                                >
                                    Sign up for free
                                </Link>
                            </Typography>
                        </Stack>

                        <form className="flex flex-col items-start justify-center space-y-5 w-4/6 min-h-[260px] ">
                            <Stack className="min-w-full" spacing={1}>
                                <FormInput
                                    name="username"
                                    id="username"
                                    autocomplete="on"
                                    label="Username"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Username"
                                    helperText={errors.username?.message}
                                    helperTextIsError={
                                        errors.username !== undefined
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
                                        errors.username !== undefined
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
                                    handleClick={() => console.log()}
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
