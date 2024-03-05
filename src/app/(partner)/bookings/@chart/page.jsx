'use client'
import React from 'react'
import BarChart from '@/components/Chart/BarChart'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'

export default function BookingChart() {
    return (
        <BarChart
            title="Income in current month"
            className="w-full h-80"
            data={[
                {
                    data: monthLabels.map(() =>
                        faker.number.int({ min: 0, max: 0 })
                    ),
                    label: 'Nurse',
                },
            ]}
        />
    )
}
