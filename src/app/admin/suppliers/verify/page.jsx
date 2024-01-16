import AdminLayout from '@/components/Layout/Admin'
import PageTitle from '@/components/PageTitle'
import Table from '@/components/Table'
import verifySupplierTableCols from '@/constants/Pages/admin/suppliers/verify/table/columns'
import React from 'react'

export const metadata = {
    title: 'Supplier Verify',
    description: 'Verify a supplier',
}

const rows = [
    {
        id: 1,
        sex: 'Male',
        fullName: 'Nguyen Thi Nhu Quynh',
        email: 'tonyandy789@fpt.edu.vn',
        phone: '0769640310',
        address: '90 Nguyen Thi Tiep, Khu Pho 5, Thi tran Cu Chi, TP.HCM',
        status: 'Active',
    },
]

export default function SupplierVerifyPage() {
    return (
        <AdminLayout>
            <PageTitle>Verify Supplier</PageTitle>
            <Table
                rows={rows}
                columns={verifySupplierTableCols}
                height={500}
                hasActionRow={true}
            />
        </AdminLayout>
    )
}
