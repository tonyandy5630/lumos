'use client'
import * as React from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//* Use Pagination on api

export default function Table(props) {
    const {
        columns,
        rows,
        isLoading,
        isError,
        secondary,
        hasActionRow,
        renderRowActions,
        height,
        title,
        children,
    } = props
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
    })

    const table = useMaterialReactTable({
        columns: columns,
        data: rows,
        state: {
            isLoading: isLoading,
        },
        enableBottomToolbar: true,
        enableStickyHeader: true,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        muiTablePaperProps: {
            elevation: 0,
            sx: {
                minWidth: '100%',
                border: '2px solid',
                borderColor: 'secondary.main',
                my: '12px',
                borderRadius: '12px',
            },
        },
        muiTableContainerProps: {
            sx: {
                width: '100%',
                minWidth: '100%',
                minHeight: '400px',
            },
        },
        enableHiding: false,
        muiTableHeadCellProps: {
            sx: {
                bgcolor: `${secondary ? 'secondary.main' : 'primary.main'}`,
                '& .Mui-TableHeadCell-Content': {
                    justifyContent: 'space-between',
                },
            },
        },
        enableRowActions: hasActionRow ?? false,
        positionActionsColumn: 'last',
        renderRowActions: renderRowActions,
    })

    return (
        <Box
            sx={{
                minHeight: height,
                minWidth: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
                overflowX: 'scroll',
            }}
        >
            <Typography variant="h5" fontWeight="bold">
                {title}
            </Typography>
            {children}
            {isError ? (
                <Typography className="text-error">
                    Something went wrong
                </Typography>
            ) : (
                <></>
            )}
            <MaterialReactTable table={table} />
        </Box>
    )
}
