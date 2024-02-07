'use client'
import BarChart from '@/components/Chart/BarChart'
import NurseLayout from '@/components/Layout/Nurse'
import PageTitle from '@/components/PageTitle'
import { monthLabels } from '@/utils/chart'
import React from 'react'
import { faker } from '@faker-js/faker'
import { NurseBookingStat } from '@/constants/NurseBookingPage.const'
import StatTab from '@/components/StatTab'
import Table from '@/components/Table'
import { bookingColumns } from '@/constants/Pages/nurse/booking/table/columns'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import DetailIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'

const DATA = [
    {
        code: 1,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
        status: 0,
    },
    {
        code: 2,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
        status: 1,
    },
    {
        code: 3,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
        status: 2,
    },
    {
        code: 4,
        customerName: 'Test',
        date: '02/03/23',
        time: '9:00 AM',
        status: 1,
    },
]

export default function BookingPage() {
    return (
        <NurseLayout>
            <PageTitle>Bookings</PageTitle>
            <div className="flex items-center justify-between min-w-full my-3">
                {NurseBookingStat.map((item) => {
                    return (
                        <StatTab
                            key={item.title}
                            size="small"
                            title={item.title}
                            icon={item.icon}
                        >
                            300.000.000
                        </StatTab>
                    )
                })}
            </div>
            <BarChart
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
            <Table
                title="All Bookings"
                rows={DATA}
                columns={bookingColumns}
                hasActionRow={true}
                renderRowActions={({ row }) => (
                    <Box>
                        <IconButton
                            LinkComponent={Link}
                            href={`/bookings/detail/${row.id}`}
                            color="secondary"
                        >
                            <DetailIcon />
                        </IconButton>
                    </Box>
                )}
            />
        </NurseLayout>
    )
}
