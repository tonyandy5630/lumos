'use client'
import dynamic from 'next/dynamic'
import * as React from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { generateCsv, download } from 'export-to-csv'
import csvConfig from './config'
const Button = dynamic(() => import('@mui/material/Button'))
const FileDownloadIcon = dynamic(
    () => import('@mui/icons-material/FileDownload')
)

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
        exportData = false,
        rowCount,
        pagination,
        isRefetching,
    } = props

    const handleExportData = () => {
        const csv = generateCsv(csvConfig)(rows)
        download(csvConfig)(csv)
    }

    const [paginationModal, setPaginationModal] = React.useState({
        pageIndex: 1,
        pageSize: 5,
    })

    const table = useMaterialReactTable({
        columns: columns,
        data: rows,
        state: {
            isLoading: isLoading,
            pagination: pagination?.pagination ?? paginationModal,
            showProgressBars: isRefetching ?? false,
        },
        onPaginationChange: pagination?.setPagination ?? setPaginationModal,
        manualPagination: true,
        enableBottomToolbar: true,
        enableStickyHeader: true,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        rowCount: rowCount ?? rows.length,
        muiTablePaperProps: {
            elevation: 0,
            sx: {
                minWidth: '100%',
                maxWidth: '100%',
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
        muiPaginationProps: {
            rowsPerPageOptions: [6, 10],
            showFirstButton: false,
            showLastButton: false,
        },
        enableRowActions: hasActionRow ?? false,
        positionActionsColumn: 'last',
        renderRowActions: renderRowActions,
        renderTopToolbarCustomActions: exportData
            ? ({ table }) => {
                  return (
                      <Box
                          sx={{
                              display: 'flex',
                              gap: '16px',
                              padding: '8px',
                              flexWrap: 'wrap',
                          }}
                      >
                          <Button
                              //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
                              onClick={handleExportData}
                              color="info"
                              startIcon={<FileDownloadIcon />}
                          >
                              Export All Data
                          </Button>
                          <Button
                              disabled={table.getRowModel().rows.length === 0}
                              color="info"
                              //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
                              onClick={() =>
                                  handleExportRows(table.getRowModel().rows)
                              }
                              startIcon={<FileDownloadIcon />}
                          >
                              Export Page Rows
                          </Button>
                      </Box>
                  )
              }
            : undefined,
    })

    return (
        <Box
            sx={{
                minHeight: height,
                minWidth: '100%',
                maxWidth: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                flexDirection: 'column',
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
