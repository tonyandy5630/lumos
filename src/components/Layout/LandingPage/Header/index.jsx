import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import HeaderTabs from './Tabs'
import HideOnScroll from '../../HideOnScroll'

export default function LandingPageHeader() {
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
                            className="w-full max-w-40 h-auto"
                        />
                    </Link>
                    <div className="flex items-center justify-end w-fit">
                        <HeaderTabs />
                        <div className="flex items-center justify-between space-x-5 w-fit">
                            <Button
                                variant="outlined"
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
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}
