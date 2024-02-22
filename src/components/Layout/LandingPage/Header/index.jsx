import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import HeaderTabs from './Tabs'
import HideOnScroll from '../../HideOnScroll'
import AUTH_URL from '@/constants/URL/auth'
import { cookies } from 'next/headers'
import { getCookie } from 'cookies-next'
import { userRole_c } from '@/constants/cookies.const'
import ROLES from '@/constants/roles.const'
import ADMIN_URL from '@/constants/URL/admin'
import NURSE_URL from '@/constants/URL/partner'

export default function LandingPageHeader() {
    const userRoles = getCookie(userRole_c, { cookies })
    return (
        <HideOnScroll>
            <AppBar className="!shadow-none h-28  flex justify-center items-center">
                <Toolbar className="flex items-center justify-between w-11/12 py-4 px-9">
                    <Link href="/" aria-label="menu">
                        <Image
                            src="/lumos_text.png"
                            alt="lumos's logo"
                            width={150}
                            height={300}
                            priority={true}
                            className="w-full h-auto max-w-40"
                        />
                    </Link>
                    <div className="flex items-center justify-end w-fit">
                        <HeaderTabs />
                        <div className="flex items-center justify-between space-x-5 w-fit">
                            {userRoles &&
                            (userRoles === ROLES.admin.toString() ||
                                userRoles === ROLES.partner.toString()) ? (
                                <Button
                                    variant="outlined"
                                    LinkComponent={Link}
                                    href={
                                        userRoles === ROLES.admin.toString()
                                            ? ADMIN_URL.HOMEPAGE
                                            : NURSE_URL.HOMEPAGE
                                    }
                                    sx={{
                                        color: 'success.dark',
                                        borderColor: 'success.dark',
                                        borderRadius: '15px',
                                        '&:hover': {
                                            color: 'secondary.main',
                                            borderColor: 'secondary.main',
                                        },
                                    }}
                                >
                                    Go to dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        LinkComponent={Link}
                                        href={AUTH_URL.LOGIN}
                                        sx={{
                                            color: 'success.dark',
                                            borderColor: 'success.dark',
                                            borderRadius: '15px',
                                            '&:hover': {
                                                color: 'secondary.main',
                                                borderColor: 'secondary.main',
                                            },
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        variant="contained"
                                        LinkComponent={Link}
                                        href={AUTH_URL.REGISTER}
                                        sx={{
                                            color: 'white',
                                            borderRadius: '15px',
                                            bgcolor: 'success.dark',
                                            '&:hover': {
                                                bgcolor: 'secondary.main',
                                            },
                                        }}
                                    >
                                        Sign up
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}
