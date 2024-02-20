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
        href: ADMIN_URL.HOMEPAGE_URL,
    },
    {
        title: 'Suppliers',
        icon: <SupplierIcon {...options} />,
        href: ADMIN_URL.SUPPLIER_URL,
    },
    {
        title: 'Members',
        icon: <MemberIcon {...options} />,
        href: ADMIN_URL.MEMBER_URL,
    },
    {
        title: 'Bookings',
        icon: <BookingIcon {...options} />,
        href: ADMIN_URL.BOOKING_URL,
        sub_menu: [
            {
                title: 'Pending Bookings',
                href: ADMIN_URL.PENDING_BOOKING_URL,
            },
            {
                title: 'Booking in Progress',
                href: ADMIN_URL.WORKING_BOOKING_URL,
            },
        ],
    },
    {
        title: 'Customer Service',
        icon: <CustomerServiceIcon {...options} />,
        href: ADMIN_URL.CUSTOMER_SERVICE_URL,
    },
    {
        title: 'Profile',
        icon: <ProfileIcon {...options} />,
        href: ADMIN_URL.PROFILE_URL,
    },
    {
        title: 'Help',
        icon: <HelpIcon {...options} />,
        href: ADMIN_URL.HELP_URL,
    },
]

export const drawerWidth = 286

export default AdminNavItems
