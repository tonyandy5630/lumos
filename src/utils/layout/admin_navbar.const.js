// @ts-nocheck
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SupplierIcon from '@mui/icons-material/Person2Outlined'
import MemberIcon from '@mui/icons-material/GroupOutlined'
import BookingIcon from '@mui/icons-material/MedicalInformationOutlined'
import CustomerServiceIcon from '@mui/icons-material/HeadsetMicOutlined'
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ADMIN_URL from '@/constants/URL/admin'

export const options = {
    color: 'secondary',
}

const AdminNavItems = [
    {
        title: 'Homepage',
        icon: <HomeOutlinedIcon {...options} />,
        href: ADMIN_URL.HOMEPAGE,
    },
    {
        title: 'Suppliers',
        icon: <SupplierIcon {...options} />,
        href: ADMIN_URL.SUPPLIER,
    },
    {
        title: 'Members',
        icon: <MemberIcon {...options} />,
        href: ADMIN_URL.MEMBER,
    },
    {
        title: 'Bookings',
        icon: <BookingIcon {...options} />,
        href: ADMIN_URL.BOOKING,
    },
    {
        title: 'Customer Service',
        icon: <CustomerServiceIcon {...options} />,
        href: ADMIN_URL.CUSTOMER_SERVICE,
    },
    {
        title: 'Profile',
        icon: <ProfileIcon {...options} />,
        href: ADMIN_URL.PROFILE,
    },
    {
        title: 'Help',
        icon: <HelpIcon {...options} />,
        href: ADMIN_URL.HELP,
    },
]

export const drawerWidth = 286

export default AdminNavItems
