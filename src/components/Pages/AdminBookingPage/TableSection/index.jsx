'use client'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Table from '@/components/Table'
import { getAppBookingsAPI } from '@/api/admin.api'
import AppBookingColumns, { formatData } from './column'

export default function AdminBookingTableSection() {
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 6,
    })
    const { data, isLoading, isSuccess, isError, error, isRefetching } =
        useQuery({
            queryKey: [
                '/get-app-bookings',
                pagination.pageIndex,
                pagination.pageSize,
            ],
            queryFn: () =>
                getAppBookingsAPI(
                    pagination.pageIndex + 1,
                    pagination.pageSize
                ),
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
    }, [isSuccess, pagination.pageIndex, pagination.pageSize])

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
