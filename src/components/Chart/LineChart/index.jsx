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
    Filler,
} from 'chart.js'
import { getDatasets, monthLabels } from '@/utils/chart'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

export default function LineChart(props) {
    const data = useMemo(
        () => ({
            labels: monthLabels,
            datasets: getDatasets(props.data),
        }),
        [props.data]
    )

    const options = useMemo(() => {
        return {
            plugins: {
                legend: {
                    display: props.showLegend,
                    position: 'top',
                    align: 'end',
                },
                title: {
                    display: true,
                    text: props.title,
                    font: {
                        size: 19,
                    },
                    align: 'start',
                },
            },
            maintainAspectRatio: false,
        }
    }, [])

    return <Line options={options} data={data} width={900} />
}
