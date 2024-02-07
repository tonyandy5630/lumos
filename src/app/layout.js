'use client'
import * as React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import theme from '@/utils/themes'
import { ThemeProvider } from '@emotion/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import StoreProvider from '@/components/StoreProvider'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <StoreProvider>{children}</StoreProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
