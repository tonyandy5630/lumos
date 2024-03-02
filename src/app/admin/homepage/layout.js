import React from 'react'

export default function AdminDashBoardLayout({
    children,
    analytics,
    list,
    stat,
}) {
    return (
        <>
            {children}
            {stat}
            {analytics}
            {list}
        </>
    )
}
