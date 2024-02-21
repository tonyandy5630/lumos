import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export default function MyButton(props) {
    const {
        children: text,
        disable,
        handleClick,
        className,
        type,
        variant = 'contained',
        loading = false,
    } = props

    return (
        <LoadingButton
            variant={variant}
            disabled={disable}
            className={` ${disable ? '!bg-slate-400' : ''} ${
                variant !== 'contained' ? '!bg-none' : '!bg-secondary'
            }  !rounded-xl !text-mosh !min-w-full  ${className} min-h-10`}
            sx={{
                border: '1px solid',
                borderColor: 'secondary.main',
                '&:hover': {
                    borderColor: 'black',
                },
            }}
            loading={loading}
            onClick={handleClick}
            loadingIndicator="loading"
            type={type ?? 'button'}
        >
            {/* for handle error when translating in ChromeDev tool*/}
            {loading ? '' : <span>{text}</span>}
        </LoadingButton>
    )
}
