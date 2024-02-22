import React from 'react'
import NurseLayout from '@/components/Layout/Nurse'
import Authorize from '@/components/Layout/Authorize'
import ROLES from '@/constants/roles.const'

export default function NurseLayoutComp({ children }) {
    return (
        <Authorize authorizeRole={ROLES.partner}>
            <NurseLayout>{children}</NurseLayout>
        </Authorize>
    )
}
