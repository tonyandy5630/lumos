// @ts-nocheck
import React from 'react'
import BookingIcon from '@mui/icons-material/MedicalServices'
import iconStatTabSx from '@/utils/icon'
import NewMemberIcon from '@mui/icons-material/Person4'
import OperationIcon from '@mui/icons-material/VolunteerActivism'
import RevenueIcon from '@mui/icons-material/AccountBalance'

const sx = {
    ...iconStatTabSx,
    fontSize: '30px',
}

export const HomePageStatTabs = [
    {
        title: 'Today Bookings',
        icon: <BookingIcon sx={sx} />,
    },
    {
        title: 'New member',
        icon: <NewMemberIcon sx={sx} />,
    },
    {
        title: 'Operation',
        icon: <OperationIcon sx={sx} />,
    },
    {
        title: 'Revenue',
        icon: <RevenueIcon sx={sx} />,
    },
]
