import React from 'react'
import NurseLayout from '@/components/Layout/Nurse'
import Authorize from '@/components/Layout/Authorize'
import ROLES from '@/constants/roles.const'

export default function NurseLayoutComp({ children }) {
    return (
        <NurseLayout>
            <Authorize authorizeRole={ROLES.partner}>{children}</Authorize>
        </NurseLayout>
    )
}
