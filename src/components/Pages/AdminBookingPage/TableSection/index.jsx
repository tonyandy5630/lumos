'use client'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import Table from '@/components/Table'
import { getAppBookingsAPI } from '@/api/admin.api'
import AppBookingColumns, { formatData } from './column'
import usePagination from '@/hooks/usePagination'

export default function AdminBookingTableSection() {
    const { pageIndex, pageSize, pagination, setPagination } = usePagination()
    const { data, isLoading, isSuccess, isError, error } = useQuery({
        queryKey: [
            '/get-app-bookings',
            pagination.pageIndex,
            pagination.pageSize,
        ],
        queryFn: () => getAppBookingsAPI(pageIndex + 1, pageSize),
        retry: 2,
    })

    const rows = useMemo(() => {
        try {
            if (isSuccess) {
                const res = data?.data?.data.list
                const total = data?.data?.data.totalBooking
                if (res) {
                    return {
                        rows: res.map((i) => formatData(i)),
                        total,
                    }
                }
            }
            return {
                rows: [],
                total: 0,
            }
        } catch (e) {
            console.log(error)
        }
    }, [isSuccess, pageIndex, pageSize])

    return (
        <Table
            columns={AppBookingColumns}
            rows={rows.rows}
            isLoading={isLoading}
            isError={isError}
            rowCount={rows.total}
            pagination={{ pagination, setPagination }}
        />
    )
}
