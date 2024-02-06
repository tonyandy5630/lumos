import React from 'react'
import NumberOfBookingIcon from '@mui/icons-material/InsertInvitation'
import TodayFinishBookingIcon from '@mui/icons-material/EventAvailable'
import TodayBookingIcon from '@mui/icons-material/DateRange'
import OnGoingIcon from '@mui/icons-material/EditCalendar'
import iconStatTabSx from '@/utils/icon'

const sx = {
    ...iconStatTabSx,
    fontSize: '30px',
}

export const NurseBookingStat = [
    {
        title: 'Number of Booking',
        icon: <NumberOfBookingIcon sx={sx} />,
    },
    {
        title: 'Today finish Booking',
        icon: <TodayFinishBookingIcon sx={sx} />,
    },
    {
        title: 'Today Booking',
        icon: <TodayBookingIcon sx={sx} />,
    },
    {
        title: 'On-going',
        icon: <OnGoingIcon sx={sx} />,
    },
]
