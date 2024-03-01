'use client'
import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import PrimaryName from '@/components/PrimaryName'
import TimeIcon from '@mui/icons-material/AccessTime'
import BookingInfo from '../../BillDetailPage/BookingInfo'
import DetailContainer from './DetailContainer'

const avatar_size = 90

export default function BookingDetailSection(props) {
    const { bookingDetail } = props
    return (
        <div className="flex items-center justify-start min-w-full px-10 space-x-3 border border-black py-7 rounded-xl min-h-80 bg-primary">
            <Image
                src="/unknown.jpg"
                width={avatar_size}
                height={avatar_size}
                alt="partner's avatar"
                className="self-start border border-black rounded-xl"
            />
            <div className="flex flex-col items-start justify-between min-h-full space-y-1">
                <div>
                    <PrimaryName>{bookingDetail?.partner}</PrimaryName>
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
                        <span>{bookingDetail?.bookingDate?.date}</span>
                        <span className="mx-2">-</span>
                        <span>{bookingDetail?.bookingDate?.time}</span>
                    </Typography>
                    <PrimaryName className="!text-4xl">
                        {bookingDetail?.customerName}
                    </PrimaryName>
                </div>
                {/* Detail section */}
                <div className="flex items-start w-full space-x-32in-h-32">
                    <DetailContainer>
                        <BookingInfo title="BookingId">
                            {bookingDetail?.bookingId}
                        </BookingInfo>
                        <BookingInfo title="Booking Date">
                            {bookingDetail?.bookingDate.date}
                        </BookingInfo>
                        <BookingInfo title="Address">
                            {bookingDetail?.address}
                        </BookingInfo>
                    </DetailContainer>
                </div>
                {/*End  Detail section */}
                <div>
                    <span className="mr-1 font-bold text-mosh">
                        Booking note:
                    </span>
                    <Typography paragraph>
                        {bookingDetail?.booking?.note}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
