import React from 'react'
import Header from './Header'
import Box from '@mui/material/Box'
import Footer from './Footer'
import Toolbar from '@mui/material/Toolbar'
import FloatingButton from '@/components/Button/FloatingButton'

export default function LandingPageLayout({ children }) {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-screen relative">
            <Header />
            <Toolbar className="py-4 px-9" />
            <Box sx={{ display: 'flex' }}>
                <Box
                    component="main"
                    sx={{
                        minHeight: '96vh',
                        maxWidth: '100w',
                        minWidth: '100vw',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {children}
                </Box>
            </Box>
            <FloatingButton />
            <Footer />
        </div>
    )
}
