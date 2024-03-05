'use client'
import Table from '@/components/Table'
import BookingColumns from '@/constants/Pages/nurse/booking/table/columns'
import { useMemo } from 'react'
import DetailButton from '@/components/DetailButton'
import NURSE_URL from '@/constants/URL/partner'
import { useQuery } from '@tanstack/react-query'
import { getPartnerStatusBookingsAPI } from '@/api/partner.api'
import { toPendingTableData } from '../_formatData/pending'

export default function StatusBookingTable(props) {
    const { status } = props
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/partner/bookings/' + status],
        queryFn: () => getPartnerStatusBookingsAPI(status),
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
            height={500}
            columns={BookingColumns}
            rows={rows}
            isLoading={isLoading}
            hasActionRow={true}
            isError={isError}
            renderRowActions={({ row }) => {
                const code = row.original.bookingId
                return (
                    <DetailButton
                        href={NURSE_URL.BOOKING_PENDING_DETAIL(code)}
                    />
                )
            }}
        />
    )
}
