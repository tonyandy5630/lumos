'use client'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import LineChart from '@/components/Chart/LineChart'
import {
    getAppNewMonthlyUserAPI,
    getAppRevenueMonthlyAPI,
} from '@/api/admin.api'

export default function AdminAnalytics() {
    const [userYear, setUserYear] = useState(new Date().getFullYear() - 1)
    const {
        data: userData,
        isLoading: isUserChartLoading,
        isSuccess: isUserChartSuccess,
        isError: isUserChartError,
    } = useQuery({
        queryKey: ['/app/user/monthly'],
        queryFn: () => getAppNewMonthlyUserAPI(userYear),
        retry: 2,
        enabled: userYear !== undefined,
        refetchOnWindowFocus: false,
    })

    const {
        data: revenueData,
        isLoading: isRevenueChartLoading,
        isSuccess: isRevenueChartSuccess,
        isError: isRevenueChartError,
    } = useQuery({
        queryKey: ['app/revenue/monthly'],
        queryFn: () => getAppRevenueMonthlyAPI(userYear),
        retry: 2,
        enabled: userYear !== undefined,
        refetchOnWindowFocus: false,
    })

    const userChart = useMemo(() => {
        if (isUserChartSuccess) {
            const res = userData.data.data
            const { newCustomerMonthly, newPartnerMonthly } = res

            return {
                partnerChart: newPartnerMonthly,
                customerChart: newCustomerMonthly,
            }
        }
        return {
            partnerChart: [],
            customerChart: [],
        }
    }, [isUserChartSuccess])

    const revenueChart = useMemo(() => {
        if (isRevenueChartSuccess) {
            const res = revenueData?.data.data.data
            return res
        }
        return []
    }, [isRevenueChartSuccess])

    return (
        <>
            <LineChart
                title="New User"
                showLegend={true}
                fill={true}
                className="w-full h-80"
                isLoading={isUserChartLoading}
                isError={isUserChartError}
                data={[
                    {
                        data: userChart.partnerChart,
                        label: 'Partner',
                    },
                    {
                        data: userChart.customerChart,
                        label: 'Customer',
                    },
                ]}
            />
            <LineChart
                title="Revenue in money"
                showLegend={false}
                className="w-full h-80"
                isLoading={isRevenueChartLoading}
                isError={isRevenueChartError}
                data={[
                    {
                        data: revenueChart,
                        label: 'VND',
                    },
                ]}
            />
        </>
    )
}
