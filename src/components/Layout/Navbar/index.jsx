'use client'
import React from 'react'
import {
    Drawer,
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material'
import NavItems, { drawerWidth } from '@/utils/layout/drawer.const'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
//* using Drawer MUI

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
                />
            </Toolbar>
            <Divider />
            {NavItems.map(({ icon, title }) => {
                let isCurPath = false
                const curPath = pathname.split('/')[1]
                if (
                    pathname &&
                    curPath.toLowerCase().includes(title.toLowerCase())
                ) {
                    isCurPath = true
                }
                return (
                    <ListItem key={title} disablePadding>
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
