import { useState } from 'react'

export default function usePagination(pageIndex = 0, pageSize = 6) {
    const [pagination, setPagination] = useState({
        pageIndex,
        pageSize,
    })

    return {
        pagination,
        setPagination,
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
    }
}
