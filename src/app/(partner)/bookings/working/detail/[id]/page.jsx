import React from 'react'
import PageTitle from '@/components/PageTitle'
import BookingDetail from '@/components/Pages/BookingDetail/DetailSection'

export const metadata = {
    title: 'Pending detail Page',
}

export default function PendingDetailPage() {
    return (
        <>
            <PageTitle>Booking Detail</PageTitle>
            <BookingDetail />
        </>
    )
}
