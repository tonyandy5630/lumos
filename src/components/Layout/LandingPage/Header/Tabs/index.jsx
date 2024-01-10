'use client'
import React, { useMemo } from 'react'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
import { usePathname } from 'next/navigation'

const TABS = ['Home', 'About', 'Partners', 'FAQs', 'Contact']

export default function HeaderTabs() {
    const pathname = usePathname()

    const tabs = useMemo(
        () =>
            TABS.map((item) => {
                const curURL = pathname.split('/')[1].toLowerCase()
                let url = item.toLowerCase()
                let isCurURL = false
                if (url === TABS[0].toLowerCase()) {
                    url = ''
                }
                if (url === curURL) {
                    isCurURL = true
                }

                return (
                    <Link key={item} href={`/${url}`}>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontSize: '18px',
                                color: `${isCurURL ? 'success.dark' : ''}`,
                                borderBottom: `${isCurURL ? '2px solid' : ''}`,
                                borderColor: `${
                                    isCurURL ? 'success.dark' : ''
                                }`,
                            }}
                        >
                            {item}
                        </Typography>
                    </Link>
                )
            }),
        []
    )
    return <div className="flex py-2 mr-8 space-x-4 w-fit">{tabs}</div>
}
