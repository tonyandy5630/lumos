'use client'
import dynamic from 'next/dynamic'
import StatTab from '@/components/StatTab'
import { sx } from '@/constants/HomePage.const'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAdminDashboardStatAPI } from '@/api/admin.api'
const BookingIcon = dynamic(() => import('@mui/icons-material/MedicalServices'))
const NewMemberIcon = dynamic(() => import('@mui/icons-material/Person4'))
const OperationIcon = dynamic(
    () => import('@mui/icons-material/VolunteerActivism')
)
const RevenueIcon = dynamic(() => import('@mui/icons-material/AccountBalance'))

const TOTAL_BOOKINGS = 'Total Booking'
const TOTAL_PARTNERS = 'Total Partners'
const ON_GOING_BOOKINGS = 'On-going Bookings'
const REVENUE = 'Revenue'

export default function Stat() {
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['/admin/dashboard/stat'],
        queryFn: getAdminDashboardStatAPI,
    })

    const stats = useMemo(() => {
        let res = {
            earning: undefined,
            onGoingBookings: undefined,
            totalMembers: undefined,
            totalBookings: undefined,
        }
        if (isSuccess) {
            const respond = data?.data
            const {
                earning = undefined,
                onGoingBookings = undefined,
                totalMembers = undefined,
                totalBookings = undefined,
            } = respond
            res = {
                earning,
                onGoingBookings,
                totalMembers,
                totalBookings,
            }
        }
        return (
            <div className="flex items-center justify-between min-w-full my-3">
                <StatTab
                    size="small"
                    title={TOTAL_BOOKINGS}
                    icon={<BookingIcon sx={sx} />}
                    isLoading={isLoading}
                >
                    {isSuccess && res.totalBookings}
                </StatTab>
                <StatTab
                    size="small"
                    title={TOTAL_PARTNERS}
                    isLoading={isLoading}
                    icon={<NewMemberIcon sx={sx} />}
                >
                    {res.totalMembers}
                </StatTab>
                <StatTab
                    size="small"
                    title={ON_GOING_BOOKINGS}
                    isLoading={isLoading}
                    icon={<OperationIcon sx={sx} />}
                >
                    {res.onGoingBookings}
                </StatTab>
                <StatTab
                    size="small"
                    title={REVENUE}
                    isLoading={isLoading}
                    icon={<RevenueIcon sx={sx} />}
                    endAdornment={'VND'}
                >
                    {res.earning}
                </StatTab>
            </div>
        )
    }, [isSuccess])

    return <>{stats}</>
}
