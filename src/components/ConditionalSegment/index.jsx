'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

export default function Segment({ children, segments }) {
    const segment = useSelectedLayoutSegment()
    return <>{segments.includes(segment) ? <></> : children}</>
}
