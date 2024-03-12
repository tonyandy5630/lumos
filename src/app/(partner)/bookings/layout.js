import React from 'react'
import Segment from '@/components/ConditionalSegment'

export default async function BookingLayout({
    bookinglist,
    chart,
    children,
    stat,
}) {
    return (
        <>
            {children}
            <Segment segments={['detail', 'working', 'pending', 'completed']}>
                {stat}
                {chart}
                {bookinglist}
            </Segment>
        </>
    )
}
