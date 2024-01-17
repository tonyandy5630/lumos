import React from 'react'

const billListCols = [
    {
        accessorKey: 'id',
        header: 'ID',
        size: 90,
    },
    {
        accessorKey: 'customerName',
        header: 'Customer Name',
        sortable: false,
        size: 200,
        headerClassName: 'bg-svecondary',
    },
    {
        accessorKey: 'date',
        header: 'Date',
        size: 200,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'total',
        header: 'Grand Total',
        size: 280,
        headerClassName: 'bg-secondary',
    },
    {
        accessorKey: 'action',
        header: 'Detail',
        size: 40,
    },
]

export default billListCols
