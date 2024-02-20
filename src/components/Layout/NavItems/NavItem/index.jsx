'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
const ExpandMore = dynamic(() => import('@mui/icons-material/ExpandMore'))
const ExpandLess = dynamic(() => import('@mui/icons-material/ExpandLess'), {
    loading: () => <p>Loading...</p>,
})
const Collapse = dynamic(() => import('@mui/material/Collapse'))
import Link from 'next/link'

const primaryTypographyProps = {
    sx: { fontWeight: '600', color: '#0A4F45' },
}

export default function NavItem(props) {
    const [open, setOpen] = React.useState(false)
    const { children, href, icon, active, sub_menu } = props

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div
            onMouseEnter={sub_menu ? handleClick : undefined}
            onMouseLeave={sub_menu ? handleClick : undefined}
        >
            <ListItem
                key={children}
                disablePadding
                component={Link}
                className="h-fit w-full"
                href={href}
            >
                <ListItemButton
                    sx={{
                        bgcolor: `${active ? '#FFE5E5' : ''}`,
                    }}
                >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                        primary={children}
                        primaryTypographyProps={primaryTypographyProps}
                    />
                    {(() => {
                        if (sub_menu) {
                            if (!open) {
                                return <ExpandMore />
                            }
                            return <ExpandLess />
                        }
                        return <></>
                    })()}
                </ListItemButton>
            </ListItem>
            {sub_menu ? (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {sub_menu.map(({ title, icon, href }) => (
                        <ListItem disablePadding key={title}>
                            <ListItemButton
                                component={Link}
                                sx={{ pl: 4 }}
                                href={href}
                            >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText
                                    primary={title}
                                    primaryTypographyProps={
                                        primaryTypographyProps
                                    }
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </Collapse>
            ) : (
                <></>
            )}
        </div>
    )
}
