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

export default function BookingTable() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/partner/bookings/all'],
        queryFn: () => getPartnerBookingsAPI(1),
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data?.data?.data
            return res.map((row) => toBookingTableData(row))
        }
        return []
    }, [isSuccess])

    return (
        <Table
            title="All Bookings"
            rows={rows}
            columns={BookingColumns}
            isLoading={isLoading}
            isError={isError}
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
