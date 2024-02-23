import React from 'react'
import StatTab from '@/components/StatTab'
import LineChart from '@/components/Chart/LineChart'
import Table from '@/components/Table'
import iconStatTabSx from '@/utils/icon'
import BankIcon from '@mui/icons-material/AccountBalanceOutlined'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'
import serviceCols from '@/constants/Pages/nurse/services/table/column'
import PageTitle from '@/components/PageTitle'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import Link from 'next/link'
import NURSE_URL from '@/constants/URL/partner'

export const metadata = {
    title: 'Your services',
}

const rows = [
    {
        id: 1,
        serviceName: 'Male',
        patientName: 'Nguyen Thi Nhu Quynh',
        rate: 4.6,
        numberOfBooking: 3,
    },
]

export default function ServicePage() {
    return (
        <>
            <PageTitle>Your Services</PageTitle>
            <div className="flex items-center justify-between min-w-full my-5 h-72">
                <div className="flex flex-col items-start justify-center w-2/5 min-h-full p-4 space-y-6">
                    <StatTab
                        title="Total Services"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        5000
                    </StatTab>
                    <StatTab
                        title="NET Profits"
                        icon={<BankIcon fontSize="large" sx={iconStatTabSx} />}
                    >
                        1200
                    </StatTab>
                </div>
                <LineChart
                    title="Revenue in money"
                    className="h-full "
                    width={800}
                    data={[
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 1000 })
                            ),
                        },
                    ]}
                />
            </div>
            <Table
                title="List Services"
                rows={rows}
                columns={serviceCols}
                height={500}
            >
                <div className="flex items-start justify-center my-1 space-x-7">
                    <Button
                        className="h-8 !rounded-xl !text-white !font-bold"
                        LinkComponent={Link}
                        href={NURSE_URL.ADD_SERVICE}
                        sx={{
                            bgcolor: 'secondary.dark',
                            minWidth: '92px',
                            '&:hover': {
                                bgcolor: 'secondary.main',
                            },
                        }}
                        variant="contained"
                    >
                        <AddIcon sx={{ mr: '5px', fontSize: '20px' }} /> Add
                    </Button>
                </div>
            </Table>
        </>
    )
}
