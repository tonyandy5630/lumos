'use client'
import { useMemo } from 'react'
import Table from '@/components/Table'
import {
    topServiceCols,
    topSupplierCols,
} from '@/constants/Pages/admin/homepage/table/columns'
import { useQuery } from '@tanstack/react-query'
import { getTopPartnerRatingAPI } from '@/api/admin.api'
import { formatTopPartnerData } from './_formatData/topPartner'

const supplierRows = [
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.7,
    },
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.9,
    },
    {
        id: 1,
        supplierName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        rate: 4.3,
    },
]
const serviceRows = [
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.2,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.4,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.3,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.3,
    },
    {
        id: 1,
        serviceName: 'Cham soc tre em duoi 3 thang',
        supplierName: 'Bui Thanh Tu',
        rate: 4.3,
    },
]

export default function AdminLists() {
    const {
        data: partnerData,
        isLoading: isPartnerLoading,
        isSuccess: isPartnerSuccess,
        isError: isPartnerError,
    } = useQuery({
        queryKey: ['/top-services'],
        queryFn: () => getTopPartnerRatingAPI(5),
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const topPartners = useMemo(() => {
        if (isPartnerSuccess) {
            const res = partnerData.data.data
            const formatData = res.map((partner) =>
                formatTopPartnerData(partner)
            )
            return formatData
        }
        return []
    }, [isPartnerSuccess])

    return (
        <>
            <Table
                title="Top Partners"
                rows={topPartners}
                isLoading={isPartnerLoading}
                columns={topSupplierCols}
                height={400}
                isError={isPartnerError}
            />
            <Table
                title="Top Service"
                rows={serviceRows}
                columns={topServiceCols}
            />
        </>
    )
}
