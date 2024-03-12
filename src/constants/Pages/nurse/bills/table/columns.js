'use client'
import React from 'react'
import Chip from '@mui/material/Chip'

const BillListCols = [
    {
        accessorKey: 'bookingCode',
        header: 'Code',
        size: 90,
    },
    {
        accessorKey: 'createDate',
        header: 'Date',
        size: 200,
        headerClassName: 'bg-secondary',
    },
    // {
    //     accessorKey: 'status',
    //     header: 'Status',
    //     size: 150,
    //     headerClassName: 'bg-secondary',
    //     Cell: ({ cell }) => {
    //         const paidStatus = cell.getValue() === true ? 'Paid' : 'Unpaid'
    //         const bgColor =
    //             cell.getValue() === true ? 'success.light' : 'error.main'
    //         const color = cell.getValue() === true ? 'info.main' : 'black'
    //         return (
    //             <div className="flex items-start justify-start">
    //                 <Chip
    //                     label={paidStatus}
    //                     className="text-grey"
    //                     sx={{
    //                         minWidth: '100px',
    //                         color,
    //                         fontWeight: 'bold',
    //                         bgcolor: bgColor,
    //                     }}
    //                 />
    //             </div>
    //         )
    //     },
    // },
    {
        accessorKey: 'totalPrice',
        header: 'Grand Total',
        size: 280,
        headerClassName: 'bg-secondary',
    },
]

export default BillListCols
