'use client'
import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPartnersAPI } from '@/api/admin.api'
import Table from '@/components/Table'
import PartnersColumns, { formatPartnerData } from './column'
import Button from '@mui/material/Button'
import ADMIN_URL from '@/constants/URL/admin'
import Link from 'next/link'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import usePagination from '@/hooks/usePagination'

export default function PartnerList() {
    const { pageIndex, pageSize, pagination, setPagination } = usePagination()
    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: ['/all-partners', pageIndex, pageSize],
        queryFn: () => getAllPartnersAPI(pageIndex, pageSize),
        retry: 2,
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data?.data?.data?.list
            const total = data?.data?.data?.totalPartners
            if (res) {
                return {
                    rows: res.map((i) => formatPartnerData(i)),
                    total,
                }
            }
        }
        return {
            rows: [],
            total: 0,
        }
    }, [isSuccess, pageIndex, pageSize])
    return (
        <Table
            rows={rows.rows}
            columns={PartnersColumns}
            pagination={{ pagination, setPagination }}
            rowCount={rows.total}
            isLoading={isLoading}
            isError={isError}
        >
            <div className="flex items-start justify-center my-1 space-x-7">
                <Button
                    className="h-8 !rounded-xl !text-white !font-bold"
                    LinkComponent={Link}
                    href={ADMIN_URL.ADD_PARTNER}
                    sx={{
                        bgcolor: 'secondary.dark',
                        minWidth: '92px',
                        '&:hover': {
                            bgcolor: 'secondary.main',
                        },
                    }}
                    variant="contained"
                >
                    <AddIcon sx={{ mr: '5px', fontSize: '20px' }} /> Add
                </Button>
            </div>
        </Table>
    )
}
