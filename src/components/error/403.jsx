import React from 'react'
import '@/styles/pages/error403.scss'
import AUTH_URL from '@/constants/URL/auth'

export default function Error403() {
    return (
        <div id="app">
            <div>403</div>
            <div className="txt">
                You're not authorize<span className="blink">_</span>
            </div>
            <a
                href={AUTH_URL.LOGIN}
                className="text-sm text-blue-500 underline "
            >
                Back to login
            </a>
        </div>
    )
}
