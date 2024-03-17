import React from 'react'

export default function DetailRow(props) {
    const { children } = props
    return (
        <div className={`flex flex-col justify-between min-h-full w-fit`}>
            {children}
        </div>
    )
}
