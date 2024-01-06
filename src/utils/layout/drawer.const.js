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
    },
    { title: 'Suppliers', icon: <SupplierIcon {...options} /> },
    { title: 'Members', icon: <MemberIcon {...options} /> },
    { title: 'Bookings', icon: <BookingIcon {...options} /> },
    { title: 'Customer Service', icon: <CustomerServiceIcon {...options} /> },
    { title: 'Profile', icon: <ProfileIcon {...options} /> },
    { title: 'Help', icon: <HelpIcon {...options} /> },
]
export const drawerWidth = 286

export default NavItems
