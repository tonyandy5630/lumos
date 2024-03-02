'use client'
import React from 'react'
import Rating from '@mui/material/Rating'

export const topSupplierCols = [
    {
        accessorKey: 'code',
        header: 'Code',
        size: 30,
    },
    {
        accessorKey: 'displayName',
        header: 'Partner Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'rating',
        header: 'Rating',
        size: 150,
        headerClassName: 'bg-primary',
        Cell: ({ cell }) => (
            <div className="flex items-start">
                <Rating readOnly value={cell.getValue()} precision={0.5} />
                <span className="text-grey">({cell.getValue()})</span>
            </div>
        ),
    },
]

export const topServiceCols = [
    {
        accessorKey: 'serviceCode',
        header: 'Code',
        size: 30,
    },
    {
        accessorKey: 'serviceName',
        header: 'Service Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'partnerName',
        header: 'Supplier Name',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'numberOfBooking',
        header: 'Booked Times',
        size: 200,
        headerClassName: 'bg-primary',
    },
    {
        accessorKey: 'rating',
        header: 'Rating',
        size: 150,
        headerClassName: 'bg-primary',
        Cell: ({ cell }) => (
            <div className="flex items-start">
                <Rating readOnly value={cell.getValue()} precision={0.5} />
                <span className="text-grey">({cell.getValue()})</span>
            </div>
        ),
    },
]
