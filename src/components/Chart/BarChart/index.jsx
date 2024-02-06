// @ts-nocheck
'use client'
import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    BarElement,
} from 'chart.js'
import { getDatasets, monthLabels } from '@/utils/chart'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

export default function BarChart(props) {
    const data = useMemo(
        () => ({
            labels: monthLabels,
            datasets: getDatasets(props.data, props.fill),
        }),
        [props.data]
    )

    const options = useMemo(() => {
        return {
            plugins: {
                legend: {
                    display: props.showLegend ?? false,
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

    return (
        <div
            className={` ${props.className} p-4 my-3 bg-white border-2 border-solid rounded-xl border-secondary`}
        >
            <Bar
                options={options}
                data={data}
                width={`${props.width ?? 900}`}
            />
        </div>
    )
}
