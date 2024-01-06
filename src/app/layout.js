'use client'
import * as React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import theme from '@/utils/themes'
import { ThemeProvider } from '@emotion/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </body>
        </html>
    )
}
