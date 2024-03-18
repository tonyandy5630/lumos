'use client'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import Chip from '@mui/material/Chip'
const SuccessIcon = dynamic(
    () => import('@mui/icons-material/CheckCircleOutlineOutlined')
)
const PendingIcon = dynamic(
    () => import('@mui/icons-material/QueryBuilderOutlined')
)
const CancelIcon = dynamic(() => import('@mui/icons-material/CancelOutlined'))
const WorkingIcon = dynamic(
    () => import('@mui/icons-material/EditCalendarOutlined')
)
import BOOKING_STATUS_ENUM from '@/constants/booking-status.const'
const ICON_SIZE = 10
const iconSx = {
    fontSize: `${ICON_SIZE}px`,
    color: 'white !important',
}
export default function StatusChip(props) {
    const { status } = props

    const style = useMemo(() => {
        if (status === BOOKING_STATUS_ENUM.Completed) {
            return {
                color: '#2EE656',
                icon: <SuccessIcon sx={iconSx} />,
                text: 'SUCCESS',
            }
        } else if (status === BOOKING_STATUS_ENUM.Pending) {
            return {
                color: '#E6BE2E',
                icon: <PendingIcon sx={iconSx} />,
                text: 'PENDING',
            }
        } else if (status === BOOKING_STATUS_ENUM.Doing) {
            return {
                color: '#FF9E9E',
                icon: <WorkingIcon sx={iconSx} />,
                text: 'ON-GOING',
            }
        } else if (status === BOOKING_STATUS_ENUM.Finished) {
            return {
                color: '#05B2DC',
                icon: <SuccessIcon sx={iconSx} />,
                text: 'FINISHED',
            }
        } else {
            return {
                color: '#E62E2E',
                icon: <CancelIcon sx={iconSx} />,
                text: 'CANCELLED',
            }
        }
    }, [status])

    return (
        <div className={`flex items-start`}>
            <Chip
                size="small"
                label={style.text}
                sx={{
                    minWidth: '116px',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    bgcolor: style.color,
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'start',
                }}
                icon={style.icon}
            />
        </div>
    )
}
