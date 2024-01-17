import React from 'react'
import Box from '@mui/material/Box'
import Header from '../Header'
import Toolbar from '@mui/material/Toolbar'
import Footer from '../Footer'
import NurseNavbar from './Navbar'

export default function NurseLayout({ children }) {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-screen">
            <Box sx={{ display: 'flex' }}>
                <Header />
                <NurseNavbar />
                <Box
                    component="main"
                    sx={{
                        minHeight: '96vh',
                        maxWidth: '82w',
                        minWidth: '82vw',
                        display: 'flex',
                        flexDirection: 'column',
                        py: 3,
                        px: 4,
                    }}
                >
                    <Toolbar />
                    {children}
                </Box>
            </Box>
            <Footer />
        </div>
    )
}
