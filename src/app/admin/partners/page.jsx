import PageTitle from '@/components/PageTitle'
import React from 'react'
import PartnerList from './_PartnerList'

export const metadata = {
    title: "Apps' Partners",
}

export default function PartnerAdminPage() {
    return (
        <>
            <PageTitle>App Partners</PageTitle>
            <PartnerList />
        </>
    )
}
