'use client'
import Table from '@/components/Table'
import dynamic from 'next/dynamic'
import { pendingBookingColumns } from '@/constants/Pages/nurse/booking/pendingTable/columns'
import { useMemo } from 'react'
import DetailButton from '@/components/DetailButton'
import NURSE_URL from '@/constants/URL/partner'
import { useQuery } from '@tanstack/react-query'
import { getPartnerPendingBookingsAPI } from '@/api/partner.api'
import { toPendingTableData } from '../_formatData/pending'
const Typography = dynamic(() => import('@mui/material/Typography'))

export default function PendingBookingTable() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/partner/bookings/pending'],
        queryFn: getPartnerPendingBookingsAPI,
        retry: 2,
        refetchOnWindowFocus: false,
        retryOnMount: true,
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data.data?.data
            if (!res) return []
            return res.map((i) => toPendingTableData(i))
        }
        return []
    }, [isSuccess])

    return (
        <Table
            title="Pending Booking"
            height={500}
            columns={pendingBookingColumns}
            rows={rows}
            isLoading={isLoading}
            hasActionRow={true}
            renderRowActions={({ row }) => {
                const code = row.original.bookingId
                return (
                    <DetailButton
                        href={NURSE_URL.BOOKING_PENDING_DETAIL(code)}
                    />
                )
            }}
        >
            {isError ? (
                <Typography className="text-error">
                    Something went wrong
                </Typography>
            ) : (
                <></>
            )}
        </Table>
    )
}
