'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import NURSE_URL from '@/constants/URL/partner'
const Skeleton = dynamic(() => import('@mui/material/Skeleton'))
const NavItem = dynamic(() => import('./NavItem'), {
    loading: () => (
        <Skeleton variant="rounded" width={300} height={45} sx={{ mb: 1 }} />
    ),
    ssr: false,
})

const disabledItem = [
    NURSE_URL.HELP,
    NURSE_URL.HOMEPAGE,
    NURSE_URL.PROFILE,
    NURSE_URL.BILL,
]

export default function NavItems({ items, roles }) {
    const pathname = usePathname()

    const renderItems = useMemo(() => {
        return items?.map(({ icon, title, href, sub_menu }) => {
            let active = false
            const curPath = pathname.split('/')[roles]
            if (
                pathname &&
                curPath.toLowerCase().includes(title.toLowerCase())
            ) {
                active = true
            }
            return (
                <NavItem
                    key={title}
                    href={href}
                    active={active}
                    disabled={disabledItem.includes(href)}
                    icon={icon}
                    sub_menu={sub_menu}
                >
                    {title}
                </NavItem>
            )
        })
    }, [pathname])

    return <>{renderItems}</>
}
