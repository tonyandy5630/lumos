'use client'
import Table from '@/components/Table'
import { pendingBookingColumns } from '@/constants/Pages/nurse/booking/pendingTable/columns'
import React from 'react'
import DetailButton from '@/components/DetailButton'
import NURSE_URL from '@/constants/URL/partner'

const DATA = [
    {
        code: 1,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
    },
    {
        code: 2,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
    },
    {
        code: 3,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
    },
    {
        code: 4,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
    },
]

export default function PendingBookingTable() {
    return (
        <Table
            title="Pending Booking"
            height={500}
            columns={pendingBookingColumns}
            rows={DATA}
            hasActionRow={true}
            renderRowActions={({ row }) => {
                const code = row.original.code
                return (
                    <DetailButton
                        href={NURSE_URL.BOOKING_PENDING_DETAIL(code)}
                    />
                )
            }}
        />
    )
}
