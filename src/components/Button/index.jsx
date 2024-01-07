import React from 'react'
import Button from '@mui/material/Button'
export default function MyButton(props) {
    const { children: text, disable, handleClick, className, type } = props
    return (
        <Button
            className={` ${
                disable ? 'bg-slate-400' : 'bg-secondary'
            } text-mosh rounded-xl min-w-full ${className}`}
            onClick={handleClick}
            type={type ?? 'button'}
        >
            {text}
        </Button>
    )
}
