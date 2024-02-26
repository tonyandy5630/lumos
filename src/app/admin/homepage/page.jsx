import StatTab from '@/components/StatTab'
import { HomePageStatTabs } from '@/constants/HomePage.const'
import React from 'react'

export const metadata = {
    title: 'Admin dashboard',
    description: 'View all stats',
}

export default async function HomePage() {
    return (
        <>
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
        </>
    )
}
