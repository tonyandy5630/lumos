import React from 'react'

export default function DetailContainer({ children }) {
    return (
        <div className="flex flex-col items-start justify-between space-y-2 min-w-1/2">
            {children}
        </div>
    )
}
