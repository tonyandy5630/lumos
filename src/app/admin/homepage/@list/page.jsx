'use client'
import { useMemo } from 'react'
import Table from '@/components/Table'
import {
    topServiceCols,
    topSupplierCols,
} from '@/constants/Pages/admin/homepage/table/columns'
import { useQuery } from '@tanstack/react-query'
import { getTopPartnerRatingAPI, getTopServiceBookedAPI } from '@/api/admin.api'

export default function AdminLists() {
    const {
        data: partnerData,
        isLoading: isPartnerLoading,
        isSuccess: isPartnerSuccess,
        isError: isPartnerError,
    } = useQuery({
        queryKey: ['/top-partner'],
        queryFn: () => getTopPartnerRatingAPI(5),
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const {
        data: serviceData,
        isLoading: isServiceLoading,
        isSuccess: isServiceSuccess,
        isError: isServiceError,
    } = useQuery({
        queryKey: ['/top-services'],
        queryFn: () => getTopServiceBookedAPI(5),
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const topPartners = useMemo(() => {
        if (isPartnerSuccess) {
            const res = partnerData.data.data
            return res
        }
        return []
    }, [isPartnerSuccess])

    const topServices = useMemo(() => {
        if (isServiceSuccess) {
            const res = serviceData.data.data
            return res
        }
        return []
    }, [isServiceSuccess])

    return (
        <>
            <Table
                title="Top Partners Rating"
                rows={topPartners}
                isLoading={isPartnerLoading}
                columns={topSupplierCols}
                height={400}
                isError={isPartnerError}
            />
            <Table
                title="Top Service Booked"
                rows={topServices}
                isLoading={isServiceLoading}
                isError={isServiceError}
                columns={topServiceCols}
            />
        </>
    )
}
