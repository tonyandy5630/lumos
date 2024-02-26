'use client'
import LineChart from '@/components/Chart/LineChart'
import StatTab from '@/components/StatTab'
import React from 'react'
import { faker } from '@faker-js/faker'
import { monthLabels } from '@/utils/chart'
import BankIcon from '@mui/icons-material/AccountBalanceOutlined'
import iconStatTabSx from '@/utils/icon'

export default function ServicesAnalytics() {
    return (
        <>
            <div className="flex items-center justify-between min-w-full my-5 h-72">
                <div className="flex flex-col items-start justify-center w-2/5 min-h-full p-4 space-y-6">
                    <StatTab
                        title="Total Services"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        5000
                    </StatTab>
                    <StatTab
                        title="NET Profits"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        1200
                    </StatTab>
                </div>
                <LineChart
                    title="Revenue in money"
                    className="h-full "
                    width={800}
                    data={[
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 1000 })
                            ),
                        },
                    ]}
                />
            </div>
        </>
    )
}
