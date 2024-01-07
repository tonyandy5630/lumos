'use client'
import * as React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import theme from '@/utils/themes'
import { ThemeProvider } from '@emotion/react'

const popins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={popins.className}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </body>
        </html>
    )
}
