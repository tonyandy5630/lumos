// @ts-nocheck
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined'
import { options } from './admin_navbar.const'
import BookingIcon from '@mui/icons-material/MedicalInformationOutlined'
import BillsIcon from '@mui/icons-material/MonetizationOnOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ServicesIcon from '@mui/icons-material/MedicalServicesOutlined'

const NurseNavItems = [
    {
        title: 'Homepage',
        icon: <HomeOutlinedIcon {...options} />,
        href: '/homepage',
    },
    {
        title: 'Service',
        icon: <ServicesIcon {...options} />,
        href: '/suppliers',
    },
    {
        title: 'Bookings',
        icon: <BookingIcon {...options} />,
        href: '/admin/bookings',
    },
    { title: 'Bills', icon: <BillsIcon {...options} />, href: '/bills' },
    { title: 'Profile', icon: <ProfileIcon {...options} />, href: '/profile' },
    { title: 'Help', icon: <HelpIcon {...options} />, href: '/help' },
]

export default NurseNavItems
