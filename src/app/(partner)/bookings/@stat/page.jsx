'use client'
import React from 'react'
import { NurseBookingStat } from '@/constants/NurseBookingPage.const'
import StatTab from '@/components/StatTab'

export default function BookingStats() {
    return (
        <div className="flex items-center justify-between min-w-full my-3">
            {NurseBookingStat.map((item) => {
                return (
                    <StatTab
                        key={item.title}
                        size="small"
                        title={item.title}
                        icon={item.icon}
                    >
                        0
                    </StatTab>
                )
            })}
        </div>
    )
}
