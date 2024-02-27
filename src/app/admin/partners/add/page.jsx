import PageTitle from '@/components/PageTitle'
import React from 'react'
import AddPartnerForm from './_AddPartnerForm'

export const metadata = {
    title: 'Add a partner',
}

export default function AddPartnerPage() {
    return (
        <div>
            <PageTitle>Add New Partner</PageTitle>
            <AddPartnerForm />
        </div>
    )
}
