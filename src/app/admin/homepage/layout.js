import React from 'react'

export default function AdminDashBoardLayout({ children, analytics, list }) {
    return (
        <>
            {children}
            {analytics}
            {list}
        </>
    )
}
