import Layout from '@/components/Layout'
import React from 'react'
import Typography from '@mui/material/Typography'
import Table from '@/components/Table'
import memberTableCols from '@/utils/pages/members/table/columns'
import StatTab from '@/components/StatTab'
import MemberIcon from '@mui/icons-material/Diversity1Outlined'
import iconStatTabSx from '@/utils/icon'
import LineChart from '@/components/Chart/LineChart'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'

export const metadata = {
    title: 'Members Page',
    description: 'View all members',
}
const rows = [
    {
        id: 1,
        sex: 'Male',
        fullName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        phone: '0769640310',
        address: '90 Nguyen Thi Tiep, Khu Pho 5, Thi tran Cu Chi, TP.HCM',
        status: 'Active',
    },
    {
        id: 2,

        sex: 'Female',
        firstName: 'Cersei',
        age: 31,
    },
    {
        id: 3,

        sex: 'Female',
        firstName: 'Jaime',
        age: 31,
    },
    { id: 4, sex: 'Male', firstName: 'Arya', age: 11 },
    {
        id: 5,

        sex: 'Female',
        firstName: 'Daenerys',
        age: null,
    },
    { id: 6, sex: 'Male', firstName: null, age: 150 },
    {
        id: 7,
        sex: 'Female',
        firstName: 'Ferrara',
        age: 44,
    },
    { id: 8, sex: 'Male', firstName: 'Rossini', age: 36 },
    { id: 9, sex: 'Male', firstName: 'Harvey', age: 65 },
]

export default function MemberPage() {
    return (
        <Layout>
            <div className="flex items-center justify-start min-w-full ">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Member list
                </Typography>
            </div>
            <div className="flex justify-between items-center min-w-full h-72">
                <div className="flex flex-col p-4 space-y-6 justify-center items-start w-2/5 min-h-full">
                    <StatTab
                        title="Total Members"
                        icon={
                            <MemberIcon fontSize="large" sx={iconStatTabSx} />
                        }
                    >
                        5000
                    </StatTab>
                    <StatTab
                        title="Member Growth Rate"
                        icon={
                            <MemberIcon fontSize="large" sx={iconStatTabSx} />
                        }
                    >
                        185%
                    </StatTab>
                </div>
                <div className="w-3/5 h-72 ">
                    <LineChart
                        data={monthLabels.map(() =>
                            faker.number.int({ min: -1000, max: 1000 })
                        )}
                    />
                </div>
            </div>
            <Table rows={rows} columns={memberTableCols} height={500} />
        </Layout>
    )
}
