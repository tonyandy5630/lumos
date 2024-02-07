// @ts-nocheck
'use client'
import * as React from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

//* Use Pagination on api

export default function Table(props) {
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
    })

    const table = useMaterialReactTable({
        columns: props.columns,
        data: props.rows,
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
                bgcolor: `${
                    props.secondary ? 'secondary.main' : 'primary.main'
                }`,
                '& .Mui-TableHeadCell-Content': {
                    justifyContent: 'space-between',
                },
            },
        },
        enableRowActions: props.hasActionRow ?? false,
        positionActionsColumn: 'last',
        renderRowActions: props.renderRowActions,
    })

    return (
        <Box
            sx={{
                height: props.height,
                minWidth: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h5" fontWeight="bold">
                {props.title}
            </Typography>
            {props.children}
            <MaterialReactTable table={table} />
        </Box>
    )
}
