import PageTitle from '@/components/PageTitle'
import BookingDetail from '@/components/Pages/BookingDetail/DetailSection'
import React from 'react'

export const metadata = {
    title: 'Booking detail page',
}

export default async function BookingDetailPage() {
    return (
        <>
            <PageTitle>Booking Detail</PageTitle>
            <BookingDetail />
        </>
    )
}
