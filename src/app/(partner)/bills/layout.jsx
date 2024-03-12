import React from 'react'

export default async function BillLayout({ billChart, billList, children }) {
    return (
        <>
            {children}
            {billChart}
            {billList}
        </>
    )
}
