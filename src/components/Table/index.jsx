// @ts-nocheck
'use client'
import * as React from 'react'
import { useMemo } from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import Box from '@mui/material/Box'

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
        muiTableContainerProps: {
            sx: {
                maxHeight: '400px',
                width: '100%',
                minHeight: `${props.minHeight}px`,
            },
        },
        enableHiding: false,
        muiTableHeadCellProps: {
            sx: {
                bgcolor: 'secondary.main',
                '& .Mui-TableHeadCell-Content': {
                    justifyContent: 'space-between',
                },
            },
        },
        enableRowActions: props.hasActionRow ?? false,
        positionActionsColumn: 'last',
        renderRowActionMenuItems: props.renderRowActionMenuItems,
    })

    return (
        <Box
            sx={{
                height: props.height,
                width: '100%',
            }}
        >
            <MaterialReactTable table={table} />
        </Box>
    )
}
