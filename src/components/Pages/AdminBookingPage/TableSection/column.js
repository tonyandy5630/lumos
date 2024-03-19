'use client'
import React from 'react'
import StatusChip from '@/components/StatusChip'
import { convertBookingTime } from '@/app/(partner)/bookings/_formatData/bookingData'
import toLocaleDate from '@/utils/date'
import priceFormat from '@/utils/priceFormat'

const AppBookingColumns = [
    {
        accessorKey: 'bookingCode',
        header: 'Code',
        size: 30,
    },
    {
        accessorKey: 'partner',
        header: 'Partner name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'customerName',
        header: 'Customer Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'bookingDate',
        header: 'Date',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'bookingTime',
        header: 'Booking time',
        size: 150,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'totalPrice',
        header: 'Total Price',
        size: 150,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        headerClassName: 'bg-primary',
        Cell: ({ cell }) => {
            return <StatusChip status={cell.getValue()} />
        },
    },
]

export const formatData = (data) => {
    const {
        bookingId,
        bookingCode,
        partner,
        customer,
        bookingDate,
        bookingTime,
        status,
        totalPrice,
    } = data
    return {
        bookingCode,
        partner,
        customerName: customer.fullname,
        totalPrice: priceFormat('Vi-vi', 'VND', totalPrice),
        bookingDate: toLocaleDate(bookingDate),
        bookingTime: convertBookingTime(bookingTime),
        bookingId,
        status,
    }
}

export default AppBookingColumns
