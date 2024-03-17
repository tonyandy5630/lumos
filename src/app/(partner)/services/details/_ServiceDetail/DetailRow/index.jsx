import React from 'react'

export default function DetailRow(props) {
    const { children, isContents } = props
    return (
        <form
            className={`flex flex-col justify-between min-h-full w-fit ${
                isContents ? 'min-w-[50rem]' : ''
            }`}
        >
            {children}
        </form>
    )
}
