import PageTitle from '@/components/PageTitle'
import BookingSteps from '@/components/Stepper'
import React from 'react'

export const metadata = {
    title: 'Booking detail page',
}

export default async function BookingDetailPage() {
    return (
        <>
            <PageTitle>Booking Detail</PageTitle>
            {/* <BookingDetailSection bookingDetail={bookingDetail} /> */}
            <BookingSteps currentStep={1} />
        </>
    )
}
