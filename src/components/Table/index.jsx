// @ts-nocheck
'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { GridActionsCellItem } from '@mui/x-data-grid'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
        headerClassName: 'bg-secondary',
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        sortable: false,
        width: 190,
        headerClassName: 'bg-secondary',
    },
    {
        field: 'sex',
        headerName: 'Sex',
        width: 90,
        headerClassName: 'bg-secondary',
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
        headerClassName: 'bg-secondary',
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: 150,
        headerClassName: 'bg-secondary',
    },
    {
        field: 'address',
        headerName: 'Address',
        width: '406',
        headerClassName: 'bg-secondary',
    },
    {
        field: 'actions',
        headerClassName: 'bg-secondary',
        type: 'actions',
        width: 60,
        getActions: (params) => [
            <GridActionsCellItem
                icon={<DeleteOutlinedIcon />}
                label="Save"
                sx={{
                    color: 'error.main',
                }}
            />,
        ],
    },
]

const rows = [
    {
        id: 1,
        sex: 'Male',
        fullName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        phone: '0769640310',
        address: '90 Nguyen Thi Tiep, Khu Pho 5, Thi tran Cu Chi, TP.HCM',
    },
    {
        id: 2,

        sex: 'Female',
        firstName: 'Cersei',
        age: 31,
    },
    {
        id: 3,

        sex: 'Female',
        firstName: 'Jaime',
        age: 31,
    },
    { id: 4, sex: 'Male', firstName: 'Arya', age: 11 },
    {
        id: 5,

        sex: 'Female',
        firstName: 'Daenerys',
        age: null,
    },
    { id: 6, sex: 'Male', firstName: null, age: 150 },
    {
        id: 7,
        sex: 'Female',
        firstName: 'Ferrara',
        age: 44,
    },
    { id: 8, sex: 'Male', firstName: 'Rossini', age: 36 },
    { id: 9, sex: 'Male', firstName: 'Harvey', age: 65 },
]
//* Use Pagination on api

export default function Table(props) {
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 5,
    })

    return (
        <Box
            sx={{
                height: 500,
                width: '100%',
            }}
        >
            <DataGrid
                rows={rows}
                columns={columns}
                paginationMode="server"
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                getRowClassName={() => 'bg-yellow-ish'}
                disableRowSelectionOnClick
            />
        </Box>
    )
}
