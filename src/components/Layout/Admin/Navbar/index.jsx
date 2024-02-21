import React from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'
import AdminNavItems, { drawerWidth } from '@/utils/layout/admin_navbar.const'
import Image from 'next/image'
import NavItems from '../../NavItems'

export default function Navbar() {
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
                    placeholder="blur"
                    blurDataURL="/lumos_text.png"
                />
            </Toolbar>
            <Divider />
            <NavItems items={AdminNavItems} roles={2} />
        </Drawer>
    )
}
