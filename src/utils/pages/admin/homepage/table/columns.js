'use client'
import React from 'react'
import Rating from '@mui/material/Rating'

const topSupplierCols = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 30,
    },
    {
        accessorKey: 'supplierName',
        header: 'Supplier Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'rate',
        header: 'Rate',
        size: 150,
        headerClassName: 'bg-secondary',
        Cell: ({ cell }) => (
            <div className="flex items-start justify-center">
                <Rating readOnly value={cell.getValue()} precision={0.5} />
                <span className="text-grey">({cell.getValue()})</span>
            </div>
        ),
    },
]

export default topSupplierCols
