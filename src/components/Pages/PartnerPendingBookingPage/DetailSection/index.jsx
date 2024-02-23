'use client'
import React from 'react'
import dynamic from 'next/dynamic'
const ServiceInfo = dynamic(
    () => import('@/components/Pages/BillDetailPage/ServiceInfo')
)

import BookingDetailSection from '../../NurseBookingDetailPage/BookingDetailSection'
import MyButton from '@/components/Button'
import { useMutation } from '@tanstack/react-query'
import { acceptBookingAPI } from '@/api/bookings.api'
import { useRouter } from 'next/navigation'
import NURSE_URL from '@/constants/URL/partner'

const SERVICE = [
    {
        serviceName: 'Chăm sóc mẹ bầu',
        nurseName: 'Nguyễn Mai Anh',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
    {
        serviceName: 'Chăm sóc mẹ bầu 1',
        nurseName: 'Nguyễn Mai Anh',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
    {
        serviceName: 'Chăm sóc mẹ bầu 2',
        nurseName: 'Nguyễn Mai Anh',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
]

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

export default function PendingBookingDetail() {
    const router = useRouter()
    const acceptMutation = useMutation({
        mutationKey: '/accept/bookings',
        mutationFn: acceptBookingAPI,
    })

    const handleAccept = async () => {
        try {
            const data = {}
            await acceptMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    console.log(data)
                    router.push(NURSE_URL.PENDING_BOOKING)
                },
                onError: (error) => {
                    console.log(error)
                },
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <BookingDetailSection bookingDetail={bookingDetail} />
            {SERVICE?.map((item) => (
                <ServiceInfo key={item.serviceName} service={item} />
            ))}
            <div className="flex items-center justify-end min-w-full space-x-6">
                <div className="min-w-32">
                    <MyButton
                        type="button"
                        className="hover:bg-mosh hover:text-white "
                        handleClick={handleAccept}
                        loading={acceptMutation.isPending}
                    >
                        Accept
                    </MyButton>
                </div>
                <div className="min-w-32">
                    <MyButton
                        variant="outlined"
                        type="button"
                        className="!text-red-600 hover:bg-mosh hover:text-white"
                    >
                        Decline
                    </MyButton>
                </div>
            </div>
        </>
    )
}
