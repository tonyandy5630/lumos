'use client'
import * as React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import theme from '@/utils/themes'
import { ThemeProvider } from '@emotion/react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import StoreProvider from '@/components/StoreProvider'
import { AuthContextProvider } from '@/Context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
})

const queryClient = new QueryClient()

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <StoreProvider>
                            <QueryClientProvider client={queryClient}>
                                <AuthContextProvider>
                                    <ToastContainer />
                                    {children}
                                </AuthContextProvider>
                            </QueryClientProvider>
                        </StoreProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
