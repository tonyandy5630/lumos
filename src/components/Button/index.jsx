import React from 'react'
import { Button } from '@mui/material'
export default function MyButton({
    children: text,
    disable,
    handleClick,
    className,
    type = 'button',
}) {
    return (
        <Button
            className={` ${
                disable ? 'bg-slate-400' : 'bg-secondary'
            } text-mosh rounded-xl min-w-full ${className}`}
            onClick={handleClick}
            type={type}
        >
            {text}
        </Button>
    )
}
