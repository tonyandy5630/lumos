'use client'
import React, { useMemo } from 'react'
import LineChart from '@/components/Chart/LineChart'
import { useQuery } from '@tanstack/react-query'
import { getPartnerRevenueChartAPI } from '@/api/partner.api'

export default function BillsChart() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['get/partner/bill/revenue'],
        queryFn: getPartnerRevenueChartAPI(
            new Date().getMonth(),
            new Date().getFullYear()
        ),
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const revenueChart = useMemo(() => {
        if (isSuccess) {
            const res = data?.data?.data
            if (res) return res
        }
        return []
    }, [isLoading])

    return (
        <LineChart
            title="Income in current month"
            className="w-full h-80"
            data={[
                {
                    data: revenueChart,
                    label: 'Nurse',
                },
            ]}
        />
    )
}
