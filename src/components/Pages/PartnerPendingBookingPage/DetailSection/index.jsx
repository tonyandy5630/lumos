'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ServiceInfo = dynamic(
    () => import('@/components/Pages/BillDetailPage/ServiceInfo')
)
import BookingDetailSection from '../../NurseBookingDetailPage/BookingDetailSection'
import MyButton from '@/components/Button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { acceptBookingAPI, getBookingDetailAPI } from '@/api/bookings.api'
import { useRouter } from 'next/navigation'
import NURSE_URL from '@/constants/URL/partner'
import { toast } from 'react-toastify'
import { useParams } from 'next/navigation'
const Typography = dynamic(() => import('@mui/material/Typography'))
const SERVICE = [
    {
        serviceName: 'Chăm sóc mẹ bầu',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
    {
        serviceName: 'Chăm sóc mẹ bầu 1',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
    {
        serviceName: 'Chăm sóc mẹ bầu 2',
        price: '500000',
        bookDate: '23/1/2024',
        time: '8:00 - 8:30 AM',
    },
]

// const bookingDetail = {
//     partner: 'Apollo international hospital',
//     date: 'March 2',
//     time: '8:00 - 9:00 AM',
//     booking: {
//         id: 'Ls-34658',
//         date: '26/10/2023',
//         time: ' 12:45 am',
//         address: '6 Vinh Vien Street, Cu Chi, Vietnam',
//         patient: {
//             fullName: 'Aaron Leigh',
//             age: 30,
//             sex: 'Male',
//         },
//         note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac lectus vel tortor laoreet fringilla. Mauris vitae commodo diam. Morbi tempor viverra lorem vel elementum. Phasellus congue ligula vel lectus convallis convallis. ',
//     },
// }

export default function PendingBookingDetail() {
    const router = useRouter()
    const params = useParams()
    const [booking, setBooking] = useState({
        bookingDetail: null,
        medicalReports: [],
    })

    const acceptMutation = useMutation({
        mutationKey: '/accept/bookings',
        mutationFn: acceptBookingAPI,
    })
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['/booking/details' + params.id],
        queryFn: () => getBookingDetailAPI(params.id),
        retry: 0,
        refetchOnWindowFocus: false,
    })

    useEffect(() => {
        if (isSuccess) {
            const res = data.data.data
            console.log(res)
            const {
                partner,
                bookingId,
                bookingDate,
                address,
                medicalServices,
                customer,
            } = res
            const newBookingDate = new Date(bookingDate).toLocaleDateString()
            const bookingTime = new Date(bookingDate).toLocaleTimeString()
            setBooking({
                bookingDetail: {
                    partner,
                    bookingId,
                    customerName: customer.fullname,
                    bookingDate: {
                        date: newBookingDate,
                        time: bookingTime,
                    },
                    address,
                },
                medicalReports: medicalServices,
            })
        }
    }, [isSuccess])

    const handleAccept = async (data) => {
        try {
            const data = {}
            await acceptMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    console.log(data)
                    toast.success('Booking Accepted')
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
            <BookingDetailSection bookingDetail={booking.bookingDetail} />
            {booking.medicalReports?.map((report) => (
                <div className="p-4 ml-2" key={report.medicalName}>
                    <Typography className="!text-xl text-mosh">
                        {report.medicalName}
                    </Typography>
                    {report?.services?.map((item) => (
                        <ServiceInfo key={item.name} service={item} />
                    ))}
                </div>
            ))}
            <div className="flex items-center justify-end min-w-full my-3 space-x-6">
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
