'use client'
import BookingColumns from '@/constants/Pages/nurse/booking/table/columns'
import { useMemo } from 'react'
import Table from '@/components/Table'
import NURSE_URL from '@/constants/URL/partner'
import DetailButton from '@/components/DetailButton'
import { useQuery } from '@tanstack/react-query'
import { getPartnerBookingsAPI } from '@/api/partner.api'
import { toBookingTableData } from '../_formatData/bookingData'
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'
import usePagination from '@/hooks/usePagination'

export default function BookingTable() {
    const { pageIndex, pageSize, pagination, setPagination } = usePagination()
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/partner/bookings/all', pageIndex, pageSize],
        queryFn: () => getPartnerBookingsAPI(pageIndex),
        retry: 2,
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data?.data?.data
            if (res) return res.map((row) => toBookingTableData(row))
        }
        return []
    }, [isSuccess, pageIndex, pageSize])

    return (
        <Table
            title="All Bookings"
            rows={rows}
            columns={BookingColumns}
            isLoading={isLoading}
            isError={isError}
            pagination={{ pagination, setPagination }}
            rowCount={rows.length * 2}
            hasActionRow={true}
            renderRowActions={({ row }) => {
                const { bookingId, status } = row.original
                let detailHref
                ;(() => {
                    switch (status) {
                        case BOOKING_STATUS_ENUM.Pending:
                            detailHref =
                                NURSE_URL.BOOKING_PENDING_DETAIL(bookingId)
                            break
                        case BOOKING_STATUS_ENUM.Doing:
                            detailHref =
                                NURSE_URL.BOOKING_WORKING_DETAIL(bookingId)
                            break
                        default:
                            detailHref = NURSE_URL.BOOKING_DETAIL(bookingId)
                            break
                    }
                })()
                return <DetailButton href={detailHref} />
            }}
        />
    )
}
