'use client'
import BookingColumns from '@/constants/Pages/nurse/booking/table/columns'
import React from 'react'
import Table from '@/components/Table'
import NURSE_URL from '@/constants/URL/partner'
import DetailButton from '@/components/DetailButton'

export default function BookingTable() {
    return (
        <Table
            title="All Bookings"
            rows={[]}
            columns={BookingColumns}
            hasActionRow={true}
            renderRowActions={({ row }) => (
                <DetailButton href={NURSE_URL.BOOKING_DETAIL(row.id)} />
            )}
        />
    )
}
