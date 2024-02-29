'use client'
import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
const Skeleton = dynamic(() => import('@mui/material/Skeleton'))
const NavItem = dynamic(() => import('./NavItem'), {
    loading: () => (
        <Skeleton variant="rounded" width={300} height={45} sx={{ mb: 1 }} />
    ),
    ssr: false,
})

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
