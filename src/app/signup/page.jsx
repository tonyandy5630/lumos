import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import SignUpForm from '@/components/Pages/RegisterPage/SignUpForm'

export const metadata = {
    title: 'Lumos Customer Register',
}

export default function SignupPage() {
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
                        <SignUpForm />
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
