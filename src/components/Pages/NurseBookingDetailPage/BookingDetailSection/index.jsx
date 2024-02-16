'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import PrimaryName from '@/components/PrimaryName'
import TimeIcon from '@mui/icons-material/AccessTime'
import BookingInfo from '../../BillDetailPage/BookingInfo'
import DetailContainer from './DetailContainer'
import BookingSteps from '@/components/Stepper'

const avatar_size = 90

export default function BookingDetailSection(props) {
    const bookingId = useParams()
    const { bookingDetail } = props

    return (
        <div className="flex items-center justify-start w-full px-10 space-x-3 border border-black py-7 rounded-xl min-h-96 bg-primary">
            <Image
                src="/unknown.jpg"
                width={avatar_size}
                height={avatar_size}
                alt="partner's avatar"
                className="self-start border border-black rounded-xl"
            />
            <div className="flex flex-col items-start justify-between min-h-full space-y-3">
                <div>
                    <PrimaryName>{bookingDetail.partner}</PrimaryName>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        className="flex items-center text-mosh"
                    >
                        <TimeIcon
                            sx={{
                                fontSize: '16px',
                                mr: 1,
                            }}
                        />
                        <span>{bookingDetail.date}</span>
                        <span className="mx-2">-</span>
                        <span>{bookingDetail.booking.time}</span>
                    </Typography>
                </div>
                {/* Detail section */}
                <div className="flex items-start w-full space-x-32 min-h-32">
                    <DetailContainer>
                        <BookingInfo title="BookingId">
                            {bookingDetail.booking.id}
                        </BookingInfo>
                        <BookingInfo title="Booking Date">
                            {bookingDetail.booking.date}
                        </BookingInfo>
                        <BookingInfo title="Address">
                            {bookingDetail.booking.address}
                        </BookingInfo>
                    </DetailContainer>
                    <DetailContainer>
                        <BookingInfo title="BookingId">
                            {bookingDetail.booking.id}
                        </BookingInfo>
                        <BookingInfo title="Booking Date">
                            {bookingDetail.booking.date}
                        </BookingInfo>
                        <BookingInfo title="Address">
                            {bookingDetail.booking.address}
                        </BookingInfo>
                    </DetailContainer>
                </div>
                {/*End  Detail section */}
                <div>
                    <span className="mr-1 font-bold text-mosh">
                        Booking note:
                    </span>
                    <Typography paragraph>
                        {bookingDetail.booking.note}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
