import React from 'react'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import DetailIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'

export default function DetailButton(props) {
    const { href } = props
    return (
        <Box>
            <IconButton LinkComponent={Link} href={href} color="secondary">
                <DetailIcon />
            </IconButton>
        </Box>
    )
}
