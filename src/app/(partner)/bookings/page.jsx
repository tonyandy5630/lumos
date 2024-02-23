'use client'
import BarChart from '@/components/Chart/BarChart'
import PageTitle from '@/components/PageTitle'
import { monthLabels } from '@/utils/chart'
import React from 'react'
import { faker } from '@faker-js/faker'
import { NurseBookingStat } from '@/constants/NurseBookingPage.const'
import StatTab from '@/components/StatTab'
import Table from '@/components/Table'
import { bookingColumns } from '@/constants/Pages/nurse/booking/table/columns'
import NURSE_URL from '@/constants/URL/partner'
import DetailButton from '@/components/DetailButton'

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
        <>
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
                    <DetailButton href={NURSE_URL.BOOKING_DETAIL(row.id)} />
                )}
            />
        </>
    )
}
