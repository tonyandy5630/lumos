// @ts-nocheck
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SupplierIcon from '@mui/icons-material/Person2Outlined'
import MemberIcon from '@mui/icons-material/GroupOutlined'
import BookingIcon from '@mui/icons-material/MedicalInformationOutlined'
import CustomerServiceIcon from '@mui/icons-material/HeadsetMicOutlined'
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'

const options = {
    color: 'secondary',
}

const NavItems = [
    {
        title: 'Homepage',
        icon: <HomeOutlinedIcon {...options} />,
        href: '/homepage',
    },
    {
        title: 'Suppliers',
        icon: <SupplierIcon {...options} />,
        href: '/suppliers',
    },
    { title: 'Members', icon: <MemberIcon {...options} />, href: '/members' },
    {
        title: 'Bookings',
        icon: <BookingIcon {...options} />,
        href: '/bookings',
    },
    {
        title: 'Customer Service',
        icon: <CustomerServiceIcon {...options} />,
        href: '/customer-service',
    },
    { title: 'Profile', icon: <ProfileIcon {...options} />, href: '/profile' },
    { title: 'Help', icon: <HelpIcon {...options} />, href: '/help' },
]
export const drawerWidth = 286

export default NavItems
