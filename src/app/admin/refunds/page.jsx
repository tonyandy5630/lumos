import PageTitle from '@/components/PageTitle'
import React from 'react'
import RefundList from './_RefundList'

export const metadata = {
    title: 'Refund list',
}

export default function RefundPage() {
    return (
        <>
            <PageTitle>Refund Page</PageTitle>
            <RefundList />
        </>
    )
}
