import NurseLayout from '@/components/Layout/Nurse'
import PageTitle from '@/components/PageTitle'
import BookingDetailSection from '@/components/Pages/NurseBookingDetailPage/BookingDetailSection'
import BookingSteps from '@/components/Stepper'
import React from 'react'

export const metadata = {
    title: 'Booking detail page',
}

const bookingDetail = {
    partner: 'Apollo international hospital',
    date: 'March 2',
    time: '8:00 - 9:00 AM',
    booking: {
        id: 'Ls-34658',
        date: '26/10/2023',
        time: ' 12:45 am',
        address: '6 Vinh Vien Street, Cu Chi, Vietnam',
        patient: {
            fullName: 'Aaron Leigh',
            age: 30,
            sex: 'Male',
        },
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lectus vel tortor laoreet fringilla. Mauris vitae commodo diam. Morbi tempor viverra lorem vel elementum. Phasellus congue ligula vel lectus convallis convallis. ',
    },
}

export default async function BookingDetailPage() {
    return (
        <NurseLayout>
            <PageTitle>Booking Detail</PageTitle>
            <BookingDetailSection bookingDetail={bookingDetail} />
            <BookingSteps currentStep={1} />
        </NurseLayout>
    )
}
