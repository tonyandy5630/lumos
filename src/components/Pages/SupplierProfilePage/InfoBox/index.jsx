import React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export default function UserInfoBox(props) {
    return (
        <Stack
            className="bg-white rounded-xl min-w-[130px] h-fit"
            justifyContent="center"
            alignItems="center"
        >
            <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: `${props.color}` }}
            >
                {props.children}
            </Typography>
            <Typography
                variant="subtitle1"
                fontSize={13}
                sx={{ color: 'grey' }}
            >
                {props.title}
            </Typography>
        </Stack>
    )
}
