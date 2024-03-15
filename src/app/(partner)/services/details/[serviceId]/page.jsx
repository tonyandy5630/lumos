import React from 'react'
import PageTitle from '@/components/PageTitle'
import ServiceDetailSection from '../_ServiceDetail'

export const metadata = {
    title: 'Service Detail',
}

export default function ServiceDetailPage() {
    return (
        <>
            <PageTitle>Service Detail</PageTitle>
            <ServiceDetailSection />
        </>
    )
}
