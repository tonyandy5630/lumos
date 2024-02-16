import React from 'react'

export default function DetailContainer({ children }) {
    return (
        <div className="flex flex-col items-start justify-between w-1/2 space-y-2">
            {children}
        </div>
    )
}
