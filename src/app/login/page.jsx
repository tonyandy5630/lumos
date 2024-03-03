import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AUTH_URL from '@/constants/URL/auth'
import LoginForm from '@/components/Pages/LoginPage/LoginForm'

export const metadata = {
    title: 'Lumos Login',
}

export default function LoginPage() {
    return (
        <>
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
                                    Join as Customer
                                    <Link
                                        href={AUTH_URL.REGISTER}
                                        className="underline text-mosh"
                                    >
                                        Sign up for free
                                    </Link>
                                </Typography>
                            </Stack>
                            <LoginForm />
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
        </>
    )
}
