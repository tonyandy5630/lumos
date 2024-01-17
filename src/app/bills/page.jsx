import LineChart from '@/components/Chart/LineChart'
import NurseLayout from '@/components/Layout/Nurse'
import PageTitle from '@/components/PageTitle'
import { monthLabels } from '@/utils/chart'
import React from 'react'
import { faker } from '@faker-js/faker'

export const metadata = {
    title: 'Bill Page',
}
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
        </NurseLayout>
    )
}
