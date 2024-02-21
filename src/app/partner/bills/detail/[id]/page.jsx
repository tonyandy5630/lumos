import React from 'react'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import BookingInfo from '@/components/Pages/BillDetailPage/BookingInfo'
import ServiceInfo from '@/components/Pages/BillDetailPage/ServiceInfo'
import Divider from '@mui/material/Divider'
import BillInfo from '@/components/Pages/BillDetailPage/BillInfo'
import PrimaryName from '@/components/PrimaryName'

export const metadata = {
    title: 'Bill Detail',
}

const SERVICE = {
    name: 'Wound Care',
    date: '28/10/2023',
    time: '10:21',
    invoice: '#Ls-00293-000198000198',
    subTotal: 1500000,
    discount: 0,
    grandTotal: 150000,
    patient: {
        name: 'Leslie Alexander',
        address: '6 Vinh Vien Street, Cu Chi, Vietnam',
    },
    booking: {
        id: ' #Ls-346585',
        bookDate: '26/10/2023',
        bookTime: '00:45',
    },
    services: [
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
    ],
}
export default function BillDetailPage() {
    return (
        <>
            <PageTitle>Bill Detail</PageTitle>
            <div className="min-h-[30rem] bg-primary rounded-xl py-10 px-7 flex flex-col items-center justify-start">
                <div className="flex items-center justify-between min-w-full my-3 min-h-20">
                    <div className="flex items-center justify-between h-full min-h-full space-x-5">
                        <Image
                            src="/nothing.jpg"
                            width={80}
                            height={80}
                            alt="Service Image"
                            className="border border-black border-solid"
                        />
                        <div className="flex flex-col items-start justify-between min-h-full w-fit">
                            <PrimaryName>{SERVICE.name}</PrimaryName>
                            <Typography
                                variant="subtitle1"
                                className="text-gray-500"
                            >
                                {SERVICE.date}-{SERVICE.time}
                            </Typography>
                        </div>
                    </div>
                    <Typography className="text-gray-500">
                        Invoice No: {SERVICE.invoice}
                    </Typography>
                </div>
                <div className="flex flex-col items-start justify-between w-full px-5 min-h-20">
                    <div className="flex flex-col items-start justify-between text-mosh min-h-32">
                        <Typography variant="h5">
                            {SERVICE.patient.name}
                        </Typography>
                        <div className="flex flex-col items-start justify-between">
                            <BookingInfo title="Booking Id">
                                {SERVICE.booking.id}
                            </BookingInfo>
                            <BookingInfo title="Booking date">
                                {`${SERVICE.booking.bookDate}-${SERVICE.booking.bookTime}`}
                            </BookingInfo>
                            <BookingInfo title="Address">
                                {SERVICE.patient.address}
                            </BookingInfo>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch justify-between w-full my-4">
                        {SERVICE.services.map((item) => (
                            <ServiceInfo
                                key={item.serviceName}
                                service={item}
                            />
                        ))}
                    </div>
                </div>
                <Divider flexItem />
                <div className="w-full px-5 my-3">
                    <BillInfo title="Sub Total">{SERVICE.subTotal}</BillInfo>
                    <BillInfo title="Discount">{SERVICE.discount}</BillInfo>
                    <BillInfo title="Grand Total">
                        {SERVICE.grandTotal}
                    </BillInfo>
                </div>
            </div>
        </>
    )
}
