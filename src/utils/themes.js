'use client'
import React from 'react'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
        fontWeightRegular: '500',
    },
    palette: {
        primary: {
            main: '#D4FCF9',
        },
        secondary: {
            main: '#FF9E9E',
            light: '#FBD7CC',
            dark: '#F06262',
        },
        error: {
            main: '#E76F51',
        },
        success: {
            main: '#57CC99',
            dark: '#1EB39E',
        },
        warning: {
            main: '#FF9800',
        },
        info: {
            main: '#0A4F45',
            light: '#CCFBEF',
        },
    },
})

export default function ThemeProviderComponent({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
