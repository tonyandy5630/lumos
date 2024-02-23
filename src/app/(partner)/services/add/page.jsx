import PageTitle from '@/components/PageTitle'
import ServiceForm from '@/components/Pages/AddService/ServiceForm'
import React from 'react'

export const metadata = {
    title: 'Add new service',
}
export default function AddServicePage() {
    return (
        <>
            <PageTitle>Add Service</PageTitle>
            <ServiceForm />
        </>
    )
}
