import PendingBookingTable from '@/app/(partner)/bookings/_StatusBookingTable'
import PageTitle from '@/components/PageTitle'
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'
import React from 'react'

export const metadata = {
    title: 'Pending detail bookings',
}

export default function PendingBookingPage() {
    return (
        <>
            <PageTitle>Pending Bookings</PageTitle>
            <PendingBookingTable status={BOOKING_STATUS_ENUM.Pending} />
        </>
    )
}
