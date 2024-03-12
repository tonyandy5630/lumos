'use client'
import { useMemo } from 'react'
import Table from '@/components/Table'
import BillListCols from '@/constants/Pages/nurse/bills/table/columns'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import DetailIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getPartnerBillsAPI } from '@/api/partner.api'
import { toBillData } from './_formatData'
export default function PartnerBillsList() {
    const { data, isLoading, isSuccess, isError } = useQuery({
        queryKey: ['get/partner/bills'],
        queryFn: getPartnerBillsAPI,
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const rows = useMemo(() => {
        if (isSuccess) {
            const res = data?.data?.data
            if (res) {
                return res.map((i) => toBillData(i))
            }
        }
        return []
    }, [isSuccess])

    return (
        <Table
            rows={rows}
            columns={BillListCols}
            minHeight={600}
            isLoading={isLoading}
            isError={isError}
            title="Bill list"
            hasActionRow={true}
            renderRowActions={({ row }) => (
                <Box>
                    <IconButton
                        LinkComponent={Link}
                        href={`/bills/detail/${row.id}`}
                        color="secondary"
                    >
                        <DetailIcon />
                    </IconButton>
                </Box>
            )}
        />
    )
}
