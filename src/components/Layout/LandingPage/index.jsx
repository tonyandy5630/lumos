import React from 'react'
import Header from './Header'
import Box from '@mui/material/Box'
import Footer from './Footer'

export default function LandingPageLayout({ children }) {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-screen">
            <Header />
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
            <Footer />
        </div>
    )
}
