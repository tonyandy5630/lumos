import React from 'react'

import PageTitle from '@/components/PageTitle'

export const metadata = {
    title: 'Your services',
}

const rows = [
    {
        id: 1,
        serviceName: 'Cham soc me va be',
        patientName: 'Nguyen Thi Nhu Quynh',
        rate: 4.6,
        numberOfBooking: 3,
    },
]

export default function ServicePage() {
    return (
        <>
            <PageTitle>Your Services</PageTitle>
        </>
    )
}
