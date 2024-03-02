'use client'
import { useMemo, useState } from 'react'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'
import { useQuery } from '@tanstack/react-query'
import LineChart from '@/components/Chart/LineChart'
import { getAppNewMonthlyUserAPI } from '@/api/admin.api'

export default function AdminAnalytics() {
    const [userYear, setUserYear] = useState(new Date().getFullYear() - 1)
    const {
        data,
        isLoading: isUserChartLoading,
        isSuccess,
        isError: isUserChartError,
    } = useQuery({
        queryKey: ['/app/user/monthly'],
        queryFn: () => getAppNewMonthlyUserAPI(userYear),
        retry: 2,
        enabled: userYear !== undefined,
    })

    const userChart = useMemo(() => {
        if (isSuccess) {
            const res = data.data.data
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
    }, [isSuccess])

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
                data={[
                    {
                        data: monthLabels.map(() =>
                            faker.number.int({ min: 0, max: 100000 })
                        ),
                        label: 'VND',
                    },
                ]}
            />
        </>
    )
}
