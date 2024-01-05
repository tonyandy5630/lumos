import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-[95vh] min-w-screen">
            <Header>{children}</Header>
            <Footer />
        </div>
    )
}
