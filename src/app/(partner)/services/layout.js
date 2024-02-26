import React from 'react'
import Segment from './_Segment'

export default async function ServicesLayout({ analytics, list, children }) {
    return (
        <>
            {children}
            <Segment>
                {analytics}
                {list}
            </Segment>
        </>
    )
}
