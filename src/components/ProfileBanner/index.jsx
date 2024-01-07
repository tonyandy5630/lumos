import React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const avatarWidth = 135

export default function ProfileBanner(props) {
    return (
        <div className="relative flex flex-col h-56 min-w-full">
            <div className="min-w-full rounded-3xl bg-dark-primary h-4/6" />
            <div className="flex items-end justify-between px-8 h-2/6">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    spacing={3}
                    alignItems="end"
                >
                    <Avatar
                        variant="square"
                        sx={{
                            width: avatarWidth,
                            height: avatarWidth,
                            border: '5px solid white',
                            borderRadius: '12px',
                        }}
                        src={props.src ?? 'broken-img.png'}
                    />
                    <Stack justifyContent="space-between" alignItems="start">
                        <Typography variant="h4" fontWeight="500">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'grey' }}>
                            {props.title}
                        </Typography>
                    </Stack>
                </Stack>
                <Button
                    variant="contained"
                    className="self-center text-white bg-mosh rounded-xl"
                    onClick={props.handleActionButtonClick}
                >
                    {props.actionButton}
                </Button>
            </div>
        </div>
    )
}
