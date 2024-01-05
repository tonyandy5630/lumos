'use client'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Navbar from '../Navbar'
import OutLinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
import { drawerWidth } from '@/utils/layout/drawer.const'

export default function Header({ children }) {
    const [searchTxt, setSearchTxt] = React.useState('')

    const handleSearchChange = (e) => {
        setSearchTxt(e.target.value)
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            top: 5,
            border: `2px solid white`,
            color: 'white',
        },
    }))

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                component="header"
                sx={{
                    bgcolor: '#FF9E9E',
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                }}
            >
                <Toolbar
                    component={Stack}
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                >
                    <OutLinedInput
                        sx={{
                            height: '36px',
                            bgcolor: 'white',
                            borderRadius: '15px',
                        }}
                        startAdornment={<SearchIcon />}
                        onChange={handleSearchChange}
                        placeholder="Search"
                    />
                    <Box
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                minWidth: '110px',
                            },
                        }}
                    >
                        <StyledBadge
                            badgeContent={0}
                            color="secondary"
                            showZero={true}
                        >
                            <NotificationsIcon
                                color="primary"
                                sx={{
                                    fontSize: '28px',
                                    rotate: '30deg',
                                }}
                            />
                        </StyledBadge>
                        <Avatar src="/broken-image.jpg" />
                    </Box>
                </Toolbar>
            </AppBar>
            <Navbar />
            <Box
                component="main"
                sx={{
                    minHeight: '96vh',
                    maxWidth: '100vw',
                    p: 2,
                }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}
