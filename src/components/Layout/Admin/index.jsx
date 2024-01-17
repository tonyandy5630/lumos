import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Box from '@mui/material/Box'
import Navbar from './Navbar'
import Toolbar from '@mui/material/Toolbar'

export default function AdminLayout({ children }) {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-screen">
            <Box sx={{ display: 'flex' }}>
                <Header />
                <Navbar />
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
