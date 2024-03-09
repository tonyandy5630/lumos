import React from 'react'
import StatusBookingTable from '../_StatusBookingTable'
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'
import PageTitle from '@/components/PageTitle'

export const metadata = {
    title: 'Working Bookings',
}

export default function WorkingPage() {
    return (
        <>
            <PageTitle>Working Bookings</PageTitle>
            <StatusBookingTable status={BOOKING_STATUS_ENUM.Doing} />
        </>
    )
}
