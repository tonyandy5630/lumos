'use client'
import React from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import NavItems, { drawerWidth } from '@/utils/layout/drawer.const'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const pathname = usePathname()
    return (
        <Drawer
            component="aside"
            className="flex flex-col items-center justify-center"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: '#F3FDFC',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar>
                <Image
                    src="/lumos_text.png"
                    alt="lumos's logo"
                    width={drawerWidth - 30}
                    height={drawerWidth - 30}
                    priority={true}
                />
            </Toolbar>
            <Divider />
            {NavItems.map(({ icon, title, href }) => {
                let isCurPath = false
                const curPath = pathname.split('/')[1]
                if (
                    pathname &&
                    curPath.toLowerCase().includes(title.toLowerCase())
                ) {
                    isCurPath = true
                }
                return (
                    <ListItem
                        key={title}
                        disablePadding
                        component={Link}
                        href={href}
                    >
                        <ListItemButton
                            sx={{
                                bgcolor: `${isCurPath ? '#FFE5E5' : ''}`,
                            }}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText
                                primary={title}
                                primaryTypographyProps={{
                                    sx: {
                                        fontWeight: '600',
                                        color: '#0A4F45',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </Drawer>
    )
}
