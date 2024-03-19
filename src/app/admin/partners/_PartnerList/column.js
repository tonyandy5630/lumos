'use client'
import Rating from '@mui/material/Rating'
import toLocaleDate from '@/utils/date'
import StatusChip from '@/components/StatusChip'

const PartnersColumns = [
    {
        accessorKey: 'code',
        header: 'Code',
        size: 30,
    },
    {
        accessorKey: 'email',
        header: 'Email',
        size: 180,
    },
    {
        accessorKey: 'displayName',
        header: 'Display name',
        size: 180,
    },
    {
        accessorKey: 'partnerName',
        header: 'Register name',
        size: 180,
    },
    {
        accessorKey: 'address',
        header: 'Address',
        size: 300,
    },
    {
        accessorKey: 'phone',
        header: 'Phone',
        size: 180,
    },
    {
        accessorKey: 'rating',
        header: 'Rating',
        size: 180,
        Cell: ({ cell }) => (
            <div className="flex items-start">
                <Rating readOnly value={cell.getValue()} precision={0.5} />
                <span className="text-grey">({cell.getValue()})</span>
            </div>
        ),
    },
    {
        accessorKey: 'createdDate',
        header: 'Create At',
        size: 180,
    },
    {
        accessorKey: 'isDelete',
        header: 'Status',
        size: 30,
        Cell: ({ cell }) => {
            return <StatusChip status={cell.getValue()} />
        },
    },
]

export const formatPartnerData = (data) => {
    const { createdDate, ...rest } = data
    return {
        ...rest,
        createdDate: toLocaleDate(createdDate),
    }
}

export default PartnersColumns
