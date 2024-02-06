import React from 'react'
import NurseLayout from '@/components/Layout/Nurse'
import PageTitle from '@/components/PageTitle'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import BookingInfo from '@/components/Pages/BillDetailPage/BookingDetail/BookingInfo'
import ServiceInfo from '@/components/Pages/BillDetailPage/BookingDetail/ServiceInfo'
import Divider from '@mui/material/Divider'
import BillInfo from '@/components/Pages/BillDetailPage/BookingDetail/BillInfo'

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
        <NurseLayout>
            <PageTitle>Bill Detail</PageTitle>
            <div className="min-h-[30rem] bg-primary rounded-xl py-10 px-7 flex flex-col items-center justify-start">
                <div className="min-w-full flex justify-between items-center min-h-20 my-3">
                    <div className="flex justify-between items-center space-x-5 min-h-full h-full">
                        <Image
                            src="/nothing.jpg"
                            width={80}
                            height={80}
                            alt="Service Image"
                            className="border border-solid border-black"
                        />
                        <div className="flex flex-col min-h-full items-start justify-between w-fit">
                            <Typography variant="h5" fontWeight="bold">
                                {SERVICE.name}
                            </Typography>
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
                <div className="px-5 flex flex-col justify-between items-start w-full min-h-20">
                    <div className="flex flex-col justify-between items-start text-mosh min-h-32">
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
                    <div className="my-4 flex flex-col justify-between items-stretch w-full">
                        {SERVICE.services.map((item) => (
                            <ServiceInfo
                                key={item.serviceName}
                                service={item}
                            />
                        ))}
                    </div>
                </div>
                <Divider flexItem />
                <div className="w-full my-3 px-5">
                    <BillInfo title="Sub Total">{SERVICE.subTotal}</BillInfo>
                    <BillInfo title="Discount">{SERVICE.discount}</BillInfo>
                    <BillInfo title="Grand Total">
                        {SERVICE.grandTotal}
                    </BillInfo>
                </div>
            </div>
        </NurseLayout>
    )
}
