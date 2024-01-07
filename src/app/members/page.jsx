import Layout from '@/components/Layout'
import React from 'react'
import Typography from '@mui/material/Typography'
import Table from '@/components/Table'

export const metadata = {
    title: 'Members Page',
    description: 'View all members',
}

export default function MemberPage() {
    return (
        <Layout>
            <div className="flex items-center justify-start min-w-full ">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Member list
                </Typography>
            </div>
            <Table />
        </Layout>
    )
}
