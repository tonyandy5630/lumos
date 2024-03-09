'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ServiceInfo = dynamic(
    () => import('@/components/Pages/BillDetailPage/ServiceInfo')
)
import BookingDetailSection from '../../NurseBookingDetailPage/BookingDetailSection'
import MyButton from '@/components/Button'
import { useMutation, useQuery } from '@tanstack/react-query'
import {
    progressToNextBookingStatusAPI,
    getBookingDetailAPI,
} from '@/api/bookings.api'
import { useRouter } from 'next/navigation'
import NURSE_URL from '@/constants/URL/partner'
import { toast } from 'react-toastify'
import { useParams } from 'next/navigation'
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'
const Typography = dynamic(() => import('@mui/material/Typography'))

export default function BookingDetail() {
    const router = useRouter()
    const params = useParams()
    const [booking, setBooking] = useState({
        bookingDetail: null,
        medicalReports: [],
    })

    const acceptMutation = useMutation({
        mutationKey: '/accept/bookings' + params.id.toString(),
        mutationFn: progressToNextBookingStatusAPI,
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
            const {
                partner,
                bookingId,
                bookingDate,
                address,
                medicalServices,
                customer,
                status,
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
                    status,
                },
                medicalReports: medicalServices,
            })
        }
    }, [isSuccess])

    const handleAccept = async () => {
        try {
            const data = { bookingId: booking?.bookingDetail?.bookingId }
            await acceptMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    toast.success(
                        booking?.bookingDetail?.status ===
                            BOOKING_STATUS_ENUM.Pending
                            ? 'Booking Accepted'
                            : 'Booking Finished',
                        {
                            autoClose: 1000,
                        }
                    )
                    toast.onChange((payload) => {
                        if (payload.status === 'removed') {
                            if (
                                booking?.bookingDetail?.status ===
                                BOOKING_STATUS_ENUM.Pending
                            ) {
                                router.push(NURSE_URL.PENDING_BOOKING)
                            } else if (
                                booking?.bookingDetail?.status ===
                                BOOKING_STATUS_ENUM.Doing
                            ) {
                                router.push(NURSE_URL.WORKING_BOOKING)
                            }
                        }
                    })
                },
            })
        } catch (error) {
            toast.error('Something went wrong')
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
                        loading={
                            acceptMutation.isPending || acceptMutation.isPending
                        }
                    >
                        {booking?.bookingDetail?.status ===
                        BOOKING_STATUS_ENUM.Pending
                            ? 'Doing'
                            : booking?.bookingDetail?.status ===
                                BOOKING_STATUS_ENUM.Doing
                              ? 'Finish'
                              : 'Accept'}
                    </MyButton>
                </div>
                {booking?.bookingDetail?.status ===
                BOOKING_STATUS_ENUM.Pending ? (
                    <div className="min-w-32">
                        <MyButton
                            variant="outlined"
                            type="button"
                            loading={
                                acceptMutation.isPending ||
                                acceptMutation.isPending
                            }
                            className="!text-red-600 hover:bg-mosh hover:text-white"
                        >
                            Decline
                        </MyButton>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </>
    )
}
