import AdminLayout from '@/components/Layout/Admin'
import StatTab from '@/components/StatTab'
import { HomePageStatTabs } from '@/constants/HomePage.const'
import React from 'react'
import Typography from '@mui/material/Typography'
export default function HomePage() {
    return (
        <AdminLayout>
            <div className="flex items-center justify-between min-w-full">
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
        </AdminLayout>
    )
}
