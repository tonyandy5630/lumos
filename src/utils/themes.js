import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: 'Montserrat',
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

export default theme
