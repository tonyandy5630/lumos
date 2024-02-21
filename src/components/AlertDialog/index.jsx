'use client'
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function AlertDialog(props) {
    const { children, title, isOpen = false, handleCloseDialog } = props
    const [open, _] = React.useState(isOpen)

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseDialog}
                        autoFocus
                        color="secondary"
                    >
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default React.memo(AlertDialog)
