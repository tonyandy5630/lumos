import React from 'react'
import Segment from '@/components/ConditionalSegment'

export default async function ServicesLayout({ analytics, list, children }) {
    return (
        <>
            {children}
            <Segment segments={['add']}>
                {analytics}
                {list}
            </Segment>
        </>
    )
}
