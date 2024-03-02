import PageTitle from '@/components/PageTitle'
import React from 'react'

export const metadata = {
    title: 'Admin dashboard',
    description: 'View all stats',
}

export default async function HomePage() {
    return (
        <>
            <PageTitle>Admin Dashboard</PageTitle>
        </>
    )
}
