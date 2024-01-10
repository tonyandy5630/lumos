import React from 'react'
import Button from '@mui/material/Button'

export default function MyButton(props) {
    const {
        children: text,
        disable,
        handleClick,
        className,
        type,
        variant = 'contained',
    } = props

    return (
        <Button
            variant={variant}
            disabled={disable}
            className={` ${disable ? '!bg-slate-400' : ''} ${
                variant !== 'contained' ? '!bg-none' : '!bg-secondary'
            }  !rounded-xl !text-mosh !min-w-full  ${className}`}
            sx={{
                border: '1px solid',
                borderColor: 'secondary.main',
                '&:hover': {
                    borderColor: 'black',
                },
            }}
            onClick={handleClick}
            type={type ?? 'button'}
        >
            {text}
        </Button>
    )
}
