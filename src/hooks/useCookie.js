'use client'
import { getCookie } from 'cookies-next'
import React from 'react'

export default function useCookie(c_name) {
    const value = getCookie(c_name)

    return value
}
