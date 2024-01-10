import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import HeaderTabs from './Tabs'

export default function LandingPageHeader() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    className="!shadow-none h-28  flex justify-center items-center"
                >
                    <Toolbar className="flex items-center justify-between w-11/12 py-4 px-9">
                        <Link href="/" aria-label="menu">
                            <Image
                                src="/lumos_text.png"
                                alt="lumos's logo"
                                width={150}
                                height={300}
                                priority={true}
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
                                    }}
                                >
                                    Sign up
                                </Button>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}
