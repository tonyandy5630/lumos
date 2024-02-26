'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

export default function Segment({ children }) {
    const segment = useSelectedLayoutSegment()
    return <>{segment === 'add' ? <></> : children}</>
}
