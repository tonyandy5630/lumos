'use client'
import dynamic from 'next/dynamic'
const Table = dynamic(() => import('@/components/Table'), {
    loading: () => <Loading className="w-full min-h-80" />,
})
import React from 'react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import Link from 'next/link'
import NURSE_URL from '@/constants/URL/partner'
import ServiceCols from './_utils/columns'
import { useQuery } from '@tanstack/react-query'
import { getPartnerServicesAPI } from '@/api/partner.api'
import { formatData } from './_utils'
import Loading from '@/components/Loading'

export default function ListPage() {
    const [rows, setRows] = React.useState([])

    const { data, error, isLoading, isSuccess } = useQuery({
        queryKey: ['get/partner-all-service'],
        queryFn: getPartnerServicesAPI,
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const getData = () => {
        const allData = data.data.data
        return allData.map((i) => formatData(i))
    }

    const getRows = React.useCallback(() => {
        if (isSuccess) {
            setRows((prev) => getData())
        }
    }, [isSuccess])

    React.useEffect(() => {
        getRows()
    }, [isSuccess])

    if (isLoading) {
        return <Loading className="w-full min-h-80" />
    }

    if (isSuccess) {
        return (
            <Table
                title="List Services"
                rows={rows}
                columns={ServiceCols}
                height={600}
            >
                <div className="flex items-start justify-center my-1 space-x-7">
                    <Button
                        className="h-8 !rounded-xl !text-white !font-bold"
                        LinkComponent={Link}
                        href={NURSE_URL.ADD_SERVICE}
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
}
