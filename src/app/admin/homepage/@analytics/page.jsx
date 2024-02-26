import React from 'react'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'
import LineChart from '@/components/Chart/LineChart'

export default async function AdminAnalytics() {
    return (
        <>
            <LineChart
                title="New User"
                showLegend={true}
                fill={true}
                className="w-full h-80"
                data={[
                    {
                        data: monthLabels.map(() =>
                            faker.number.int({ min: 0, max: 1000 })
                        ),
                        label: 'Nurse',
                    },
                    {
                        data: monthLabels.map(() =>
                            faker.number.int({ min: 0, max: 1000 })
                        ),
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
