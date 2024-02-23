import React from 'react'
import PageTitle from '@/components/PageTitle'
import PendingBookingDetail from '@/components/Pages/PartnerPendingBookingPage/DetailSection'

export const metadata = {
    title: 'Pending detail Page',
}

export default function PendingDetailPage() {
    return (
        <>
            <PageTitle>Booking Detail</PageTitle>
            <PendingBookingDetail />
        </>
    )
}
