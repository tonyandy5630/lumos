'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
const Typography = dynamic(() => import('@mui/material/Typography'))
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
import Skeleton from '@mui/material/Skeleton'

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
            className={` ${
                props.className
            } p-4 my-3 bg-white border-2 border-solid rounded-xl ${
                props.isError ? 'border-error' : 'border-secondary'
            }`}
        >
            {props.isError && (
                <Typography className="text-error">
                    Something went wrong
                </Typography>
            )}
            {props.isLoading ? (
                <Skeleton
                    variant="rounded"
                    className="min-w-full min-h-full !rounded-xl"
                />
            ) : (
                <Line
                    options={options}
                    data={data}
                    width={`${props.width ?? 900}`}
                />
            )}
        </div>
    )
}
