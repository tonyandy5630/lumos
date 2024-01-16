import AdminLayout from '@/components/Layout/Admin'
import StatTab from '@/components/StatTab'
import { HomePageStatTabs } from '@/constants/HomePage.const'
import React from 'react'
import { monthLabels } from '@/utils/chart'
import { faker } from '@faker-js/faker'
import LineChart from '@/components/Chart/LineChart'
import Table from '@/components/Table'
import {
    topServiceCols,
    topSupplierCols,
} from '@/constants/Pages/admin/homepage/table/columns'

const supplierRows = [
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.7,
    },
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.9,
    },
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.3,
    },
]
const serviceRows = [
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.2,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.4,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.3,
    },
]

export const metadata = {
    title: 'Admin dashboard',
    description: 'View all stats',
}

export default function HomePage() {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between min-w-full my-3">
                {HomePageStatTabs.map((item) => {
                    return (
                        <StatTab
                            key={item.title}
                            size="small"
                            title={item.title}
                            icon={item.icon}
                            endAdornment={`${
                                item ===
                                HomePageStatTabs.at(HomePageStatTabs.length - 1)
                                    ? 'VND'
                                    : ''
                            }`}
                        >
                            300.000.000
                        </StatTab>
                    )
                })}
            </div>
            <div className="w-full p-4 my-3 bg-white border-2 border-solid h-80 rounded-xl border-secondary">
                <LineChart
                    title="New User"
                    showLegend={true}
                    data={[
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 1000 })
                            ),
                            label: 'Nurse',
                        },
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 1000 })
                            ),
                            label: 'Customer',
                        },
                    ]}
                />
            </div>
            <div className="w-full p-4 my-3 bg-white border-2 border-solid h-80 rounded-xl border-secondary">
                <LineChart
                    title="Revenue in money"
                    showLegend={false}
                    data={[
                        {
                            data: monthLabels.map(() =>
                                faker.number.int({ min: 0, max: 100000 })
                            ),
                            label: 'Nurse',
                        },
                    ]}
                />
            </div>
            <Table
                title="Top Suppliers"
                rows={supplierRows}
                columns={topSupplierCols}
                height={400}
            />
            <Table
                title="Top Service"
                rows={serviceRows}
                columns={topServiceCols}
                height={400}
            />
        </AdminLayout>
    )
}
