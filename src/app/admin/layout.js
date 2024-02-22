import AdminLayout from '@/components/Layout/Admin'
import Authorize from '@/components/Layout/Authorize'
import ROLES from '@/constants/roles.const'
import React from 'react'

export default function AdminLayoutComponent({ children }) {
    return (
        <Authorize authorizeRole={ROLES.admin}>
            <AdminLayout>{children}</AdminLayout>
        </Authorize>
    )
}
