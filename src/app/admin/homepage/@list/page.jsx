import React from 'react'
import Table from '@/components/Table'
import {
    topServiceCols,
    topSupplierCols,
} from '@/constants/Pages/admin/homepage/table/columns'

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

export default async function AdminLists() {
    return (
        <>
            <Table
                title="Top Suppliers"
                rows={supplierRows}
                columns={topSupplierCols}
                height={400}
            />
            <Table
                title="Top Service"
                rows={serviceRows}
                columns={topServiceCols}
            />
        </>
    )
}
