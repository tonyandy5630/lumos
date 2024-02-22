'use client'
import React from 'react'
import '@/styles/pages/error403.scss'
import AUTH_URL from '@/constants/URL/auth'
import { useRouter } from 'next/navigation'

export default function Error403() {
    const router = useRouter()
    return (
        <div id="app">
            <div>403</div>
            <div className="txt">
                You&rsquo;re not authorize<span className="blink">_</span>
            </div>
            <a
                className="p-3 my-3 text-base border border-solid hover:cursor-pointer hover:underline text-primary border-primary"
                onClick={() => router.back()}
            >
                Go back
            </a>
            <a
                href={AUTH_URL.LOGIN}
                className="text-sm text-blue-500 underline "
            >
                Back to login
            </a>
        </div>
    )
}
