import AdminBookingTableSection from '@/components/Pages/AdminBookingPage/TableSection'
import PageTitle from '@/components/PageTitle'
import React from 'react'

export const metadata = {
    title: 'Admin Bookings',
}

export default function AdminBookingsPage() {
    return (
        <>
            <PageTitle>Apps' Bookings</PageTitle>
            <AdminBookingTableSection />
        </>
    )
}
