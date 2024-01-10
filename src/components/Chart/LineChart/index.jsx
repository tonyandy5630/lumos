// @ts-nocheck
'use client'
import React, { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { monthLabels } from '@/utils/chart'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
)

export const options = {
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Return of Customer',
        },
    },
    maintainAspectRatio: false,
}

export default function LineChart(props) {
    const data = useMemo(
        () => ({
            labels: monthLabels,
            datasets: [
                {
                    data: props.data,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    tension: 0.3,
                },
            ],
        }),
        [props.data]
    )

    return <Line options={options} data={data} width={900} />
}
