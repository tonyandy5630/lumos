'use client'
import { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import DetailRow from './DetailRow'
import DetailItem from './DetailItem'
import { getPartnerServiceDetailAPI } from '@/api/service.api'
import Skeleton from '@mui/material/Skeleton'

const DETAIL_TITLES = [
    'Code',
    'Duration',
    'Service name',
    'Price',
    'Rating',
    'Categories',
    'Description',
]

export default function ServiceDetailSection() {
    const params = useParams()
    const { data, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['/get/' + params.serviceId + 'service/detail'],
        queryFn: () => getPartnerServiceDetailAPI(params.serviceId),
        retry: 2,
        refetchOnWindowFocus: false,
    })

    const details = useMemo(() => {
        if (isSuccess) {
            const res = data.data.data
            return res
        }
        return undefined
    }, [isSuccess])

    return (
        <div className="flex items-center justify-start min-w-full py-10 shadow-lg px-14 rounded-2xl bg-primary h-80 min-h-80">
            <div className="flex items-center justify-between w-6/12 h-full space-x-5 ">
                <DetailRow>
                    {DETAIL_TITLES.map((i) => (
                        <DetailItem key={i} isTitle={true}>
                            {i}
                        </DetailItem>
                    ))}
                </DetailRow>
                <DetailRow isContents={true}>
                    {isLoading ? (
                        DETAIL_TITLES.map((i) => (
                            <Skeleton
                                key={i}
                                variant="text"
                                sx={{ fontSize: '1rem' }}
                            />
                        ))
                    ) : (
                        <>
                            <DetailItem>{details?.code}</DetailItem>
                            <DetailItem>{details?.duration}</DetailItem>
                            <DetailItem>{details?.name}</DetailItem>
                            <DetailItem>{details?.price}</DetailItem>
                            <DetailItem>{details?.rating}</DetailItem>
                            <DetailItem>
                                {details?.categories?.reduce((acc, cur) => {
                                    if (acc === cur.category) {
                                        return acc
                                    }
                                    return acc.concat(',' + cur.category)
                                }, details?.categories[0]?.category)}
                            </DetailItem>
                            <DetailItem>{details?.description}</DetailItem>
                        </>
                    )}
                </DetailRow>
            </div>
        </div>
    )
}
