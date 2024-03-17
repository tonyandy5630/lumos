'use client'
import { memo, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function AlertDialog(props) {
    const {
        children,
        title,
        isOpen = false,
        handleCloseDialog,
        handleCancelDialog,
        isDangerDialog = false,
        acceptText = 'OK',
    } = props
    const [open, _] = useState(isOpen)

    return (
        <>
            <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title"
                    className={`${isDangerDialog && '!text-error'}`}
                >
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        className={`${isDangerDialog && '!text-warning'}`}
                    >
                        {children}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCloseDialog}
                        variant="contained"
                        autoFocus
                        color={isDangerDialog ? 'error' : 'secondary'}
                    >
                        {acceptText}
                    </Button>
                    {typeof handleCancelDialog === 'function' && (
                        <Button
                            variant="outlined"
                            onClick={handleCancelDialog}
                            color="secondary"
                        >
                            Cancel
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default memo(AlertDialog)
