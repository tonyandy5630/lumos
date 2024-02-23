// @ts-nocheck
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined'
import { options } from './admin_navbar.const'
import BookingIcon from '@mui/icons-material/MedicalInformationOutlined'
import PendingIcon from '@mui/icons-material/PendingActionsOutlined'
import WorkingIcon from '@mui/icons-material/EditCalendarOutlined'
import BillsIcon from '@mui/icons-material/MonetizationOnOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ServicesIcon from '@mui/icons-material/MedicalServicesOutlined'
import NURSE_URL from '@/constants/URL/partner'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const NurseNavItems = [
    {
        title: 'Homepage',
        icon: <HomeOutlinedIcon {...options} />,
        href: NURSE_URL.HOMEPAGE,
    },
    {
        title: 'Service',
        icon: <ServicesIcon {...options} />,
        href: NURSE_URL.SERVICE,
        sub_menu: [
            {
                title: 'Add Services',
                href: NURSE_URL.ADD_SERVICE,
                icon: <AddIcon {...options} />,
            },
        ],
    },
    {
        title: 'Bookings',
        icon: <BookingIcon {...options} />,
        href: NURSE_URL.BOOKING,
        sub_menu: [
            {
                title: 'Pending Bookings',
                href: NURSE_URL.PENDING_BOOKING,
                icon: <PendingIcon {...options} />,
            },
            {
                title: 'Working Bookings',
                href: NURSE_URL.WORKING_BOOKING,
                icon: <WorkingIcon {...options} />,
            },
        ],
    },
    { title: 'Bills', icon: <BillsIcon {...options} />, href: NURSE_URL.BILL },
    {
        title: 'Profile',
        icon: <ProfileIcon {...options} />,
        href: NURSE_URL.PROFILE,
    },
    { title: 'Help', icon: <HelpIcon {...options} />, href: NURSE_URL.HELP },
]

export default NurseNavItems
