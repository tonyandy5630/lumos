import Layout from '@/components/Layout'
import PageTitle from '@/components/PageTitle'
import Table from '@/components/Table'
import React from 'react'

export const metadata = {
    title: 'Supplier Verify',
    description: 'Verify a supplier',
}

export default function SupplierVerifyPage() {
    return (
        <Layout>
            <PageTitle>Verify Supplier</PageTitle>
            <Table />
        </Layout>
    )
}
