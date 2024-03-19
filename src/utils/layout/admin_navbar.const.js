import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MemberIcon from '@mui/icons-material/GroupOutlined'
import BookingIcon from '@mui/icons-material/MedicalInformationOutlined'
import HelpIcon from '@mui/icons-material/HelpOutlineOutlined'
import ADMIN_URL from '@/constants/URL/admin'
import AddPartnerIcon from '@mui/icons-material/DomainAdd'
import PartnerIcon from '@mui/icons-material/Business'
import RefundIcon from '@mui/icons-material/CurrencyExchangeOutlined'

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
        title: 'Partners',
        icon: <PartnerIcon {...options} />,
        href: ADMIN_URL.PARTNER,
        sub_menu: [
            {
                title: 'Add Partner',
                icon: <AddPartnerIcon {...options} />,
                href: ADMIN_URL.ADD_PARTNER,
            },
        ],
    },
    {
        title: 'Refunds',
        icon: <RefundIcon {...options} />,
        href: ADMIN_URL.REFUND,
    },
    {
        title: 'Help',
        icon: <HelpIcon {...options} />,
        href: ADMIN_URL.HELP,
    },
]

export const drawerWidth = 286

export default AdminNavItems
