import PageTitle from '@/components/PageTitle'
import React from 'react'
import StatusBookingTable from '../_StatusBookingTable'
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'

export const metadata = {
    title: 'Completed Booking',
}
export default function CompletedBookingPage() {
    return (
        <>
            <PageTitle>Completed Booking</PageTitle>
            <StatusBookingTable status={BOOKING_STATUS_ENUM.Completed} />
        </>
    )
}
