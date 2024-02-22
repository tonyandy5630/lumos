'use client'
import dynamic from 'next/dynamic'
const Error403 = dynamic(() => import('@/components/error/403'))
import { userRole_c } from '@/constants/cookies.const'
import useCookie from '@/hooks/useCookie'
import React from 'react'

export default function Authorize(props) {
    const { children, authorizeRole } = props
    const [userRole, _] = React.useState(useCookie(userRole_c))
    const [isLoading, setIsLoading] = React.useState(true)
    const [isAuth, setIsAuth] = React.useState(false)

    React.useEffect(() => {
        if (userRole !== authorizeRole.toString()) {
            setIsAuth(false)
        } else {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    const shouldRenderChildren = !isLoading && isAuth

    return isLoading ? (
        <div>Loading...</div>
    ) : shouldRenderChildren ? (
        children
    ) : (
        <Error403 />
    )
}
