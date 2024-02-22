'use client'
import AlertDialog from '@/components/AlertDialog'
import { userRole_c } from '@/constants/cookies.const'
import useCookie from '@/hooks/useCookie'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Authorize(props) {
    const router = useRouter()
    const { children, authorizeRole } = props
    const [userRole, _] = React.useState(useCookie(userRole_c))
    const handleClose = () => {}

    return (
        <>
            {userRole === authorizeRole ? (
                children
            ) : (
                <AlertDialog>Not authorized</AlertDialog>
            )}
        </>
    )
}
