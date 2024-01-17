'use client'
import LineChart from '@/components/Chart/LineChart'
import NurseLayout from '@/components/Layout/Nurse'
import PageTitle from '@/components/PageTitle'
import { monthLabels } from '@/utils/chart'
import React from 'react'
import { faker } from '@faker-js/faker'
import Table from '@/components/Table'
import billListCols from '@/constants/Pages/nurse/bills/table/columns'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import DetailIcon from '@mui/icons-material/ArrowForwardIos'

const rows = [
    {
        id: '1',
        customerName: 'Bui Thanh Tu',
        date: '12/1/2023',
        status: true,
        total: '299',
    },
    {
        id: '1',
        customerName: 'Bui Thanh Tu',
        date: '12/1/2023',
        status: false,
        total: '299',
    },
    {
        id: '1',
        customerName: 'Bui Thanh Tu',
        date: '12/1/2023',
        status: false,
        total: '299',
    },
    {
        id: '1',
        customerName: 'Bui Thanh Tu',
        date: '12/1/2023',
        status: false,
        total: '299',
    },
]
export default function BillPage() {
    return (
        <NurseLayout>
            <PageTitle>Bills</PageTitle>
            <LineChart
                title="Income in current month"
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
                rows={rows}
                columns={billListCols}
                minHeight={600}
                title="Bill list"
                hasActionRow={true}
                renderRowActions={({ row }) => (
                    <Box>
                        <IconButton
                            onClick={() => console.info(row)}
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
