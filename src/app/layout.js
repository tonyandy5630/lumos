import * as React from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import StoreProvider from '@/components/StoreProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthContextProvider } from '@/context'
import ThemeProviderComponent from '@/utils/themes'
import TanstackQueryProviders from '@/utils/queryClient'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <AppRouterCacheProvider>
                    <StoreProvider>
                        <ThemeProviderComponent>
                            <AuthContextProvider>
                                <TanstackQueryProviders>
                                    <ToastContainer />
                                    {children}
                                </TanstackQueryProviders>
                            </AuthContextProvider>
                        </ThemeProviderComponent>
                    </StoreProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
