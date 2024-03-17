'use client'
import { useCallback, useMemo, useState } from 'react'
import Fab from '@mui/material/Fab'
import ScrollToTop from '@mui/icons-material/VerticalAlignTop'

export default function FloatingButton() {
    const [display, setDisplay] = useState('none')
    function topFunction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    window.onscroll = () => {
        const scrolled =
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        if (scrolled) {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }

    return (
        <Fab
            color="secondary"
            aria-label="scroll-to-top"
            sx={{
                display,
                position: 'fixed',
                bottom: 20,
                right: 20,
            }}
            onClick={topFunction}
        >
            <ScrollToTop />
        </Fab>
    )
}
