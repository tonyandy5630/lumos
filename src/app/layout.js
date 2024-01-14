'use client'
import * as React from 'react'
import { Poppins } from 'next/font/google'
import './globals.css'
import theme from '@/utils/themes'
import { ThemeProvider } from '@emotion/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import StoreProvider from '@/components/StoreProvider'

const popins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={popins.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <StoreProvider>{children}</StoreProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
