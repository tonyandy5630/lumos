'use client'
import LineChart from '@/components/Chart/LineChart'
import StatTab from '@/components/StatTab'
import React from 'react'
import { faker } from '@faker-js/faker'
import { monthLabels } from '@/utils/chart'
import BankIcon from '@mui/icons-material/AccountBalanceOutlined'
import iconStatTabSx from '@/utils/icon'
import { useQuery } from '@tanstack/react-query'
import { getStatPartnerServiceAPI } from '@/api/partner.api'

export default function ServicesAnalytics() {
    const {
        data,
        error,
        isLoading: isStatLoading,
        isSuccess: isStatSuccess,
        isError: isStatError,
    } = useQuery({
        queryKey: ['/partner-service-stat'],
        queryFn: getStatPartnerServiceAPI,
        retry: 2,
    })
    return (
        <>
            <div className="flex items-center justify-between min-w-full my-5 h-72">
                <div className="flex flex-col items-start justify-center w-2/5 min-h-full p-4 space-y-6">
                    <StatTab
                        title="Total Services"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        {isStatLoading
                            ? 'Loading'
                            : isStatError
                              ? 'Error'
                              : data.data.data.totalServices}
                    </StatTab>
                    <StatTab
                        title="NET Profits"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        {isStatLoading
                            ? 'Loading'
                            : isStatError
                              ? 'Error'
                              : data.data.data.revenue}
                    </StatTab>
                </div>
                <LineChart
                    title="Revenue in money"
                    className="h-full "
                    width={800}
                    data={[
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 0 })
                            ),
                        },
                    ]}
                />
            </div>
        </>
    )
}
