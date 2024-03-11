'use client'
import React from 'react'
import LineChart from '@/components/Chart/LineChart'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'
import { useQuery } from '@tanstack/react-query'

export default function BillsChart() {
    return (
        <LineChart
            title="Income in current month"
            className="w-full h-80"
            data={[
                {
                    data: monthLabels.map(() =>
                        faker.number.int({ min: 0, max: 1000 })
                    ),
                    label: 'Nurse',
                },
            ]}
        />
    )
}
