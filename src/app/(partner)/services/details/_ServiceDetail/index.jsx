'use client'
import dynamic from 'next/dynamic'
import { useMemo, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import DetailRow from './DetailRow'
import DetailItem from './DetailItem'
import {
    deletePartnerServiceAPI,
    getPartnerServiceDetailAPI,
} from '@/api/service.api'
import Skeleton from '@mui/material/Skeleton'
import MyButton from '@/components/Button'
import { handleErrorMutation } from '@/utils/handleErrors'
const EditIcon = dynamic(() => import('@mui/icons-material/EditOutlined'))
const DeleteIcon = dynamic(() => import('@mui/icons-material/DeleteOutlined'))
const AlertDialog = dynamic(() => import('@/components/AlertDialog'))
const Backdrop = dynamic(() => import('@mui/material/Backdrop'))
import { toast } from 'react-toastify'
import NURSE_URL from '@/constants/URL/partner'
import { HttpStatusCode } from 'axios'
const NotFound = dynamic(() => import('@/components/error/NotFound'))

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
    const router = useRouter()
    const [openDialog, setOpenDialog] = useState(false)
    const { data, isSuccess, isError, isLoading, error } = useQuery({
        queryKey: ['/get/' + params.serviceId + 'service/detail'],
        queryFn: () => getPartnerServiceDetailAPI(params.serviceId),
        retry: 2,
        refetchOnWindowFocus: false,
    })
    const details = useMemo(() => {
        if (isSuccess) {
            const res = data.data.data
            if (res) return res
        }
        return undefined
    }, [isSuccess])

    const deleteMutation = useMutation({
        mutationKey: ['delete/partner-service/' + details?.serviceId],
        mutationFn: () => deletePartnerServiceAPI(details?.serviceId),
    })

    const onCancelDialog = () => {
        setOpenDialog(false)
    }

    const onOpenDeleteDialog = () => {
        setOpenDialog(true)
    }

    const handleDelete = async () => {
        try {
            await deleteMutation.mutateAsync(undefined, {
                onSuccess: (data) => {
                    toast.success('Delete service successfully', {
                        autoClose: 1000,
                    })
                    toast.onChange((payload) => {
                        if (payload.status === 'removed')
                            router.push(NURSE_URL.SERVICE)
                    })
                },
            })
        } catch (error) {
            handleErrorMutation(error)
        } finally {
            setOpenDialog(false)
        }
    }

    return (
        <div>
            <>
                {openDialog ? (
                    <Backdrop
                        open={openDialog}
                        sx={{
                            color: '#fff',
                            zIndex: (theme) => theme.zIndex.drawer + 1,
                        }}
                    >
                        <AlertDialog
                            title={`Delete service ${details?.name} ?`}
                            isOpen={openDialog}
                            handleCloseDialog={handleDelete}
                            handleCancelDialog={onCancelDialog}
                            acceptText="Delete"
                            isDangerDialog={true}
                        >
                            You cannot revert this action
                        </AlertDialog>
                    </Backdrop>
                ) : (
                    <></>
                )}
            </>
            {error && error?.response?.status === HttpStatusCode.NotFound ? (
                <NotFound />
            ) : (
                <>
                    <div className="flex items-center justify-start min-w-full py-10 shadow-lg px-14 rounded-2xl bg-primary h-80 min-h-80">
                        <div className="flex items-center justify-between w-6/12 h-full space-x-5 ">
                            <DetailRow>
                                {DETAIL_TITLES.map((i) => (
                                    <DetailItem
                                        rightAlign={true}
                                        key={i}
                                        isTitle={true}
                                    >
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
                                        <DetailItem>
                                            {details?.duration}
                                        </DetailItem>
                                        <DetailItem>{details?.name}</DetailItem>
                                        <DetailItem>
                                            {details?.price}
                                        </DetailItem>
                                        <DetailItem>
                                            {details?.rating}
                                        </DetailItem>
                                        <DetailItem>
                                            {details?.categories?.reduce(
                                                (acc, cur) => {
                                                    if (acc === cur.category) {
                                                        return acc
                                                    }
                                                    return acc.concat(
                                                        ',' + cur.category
                                                    )
                                                },
                                                details?.categories[0]?.category
                                            )}
                                        </DetailItem>
                                        <DetailItem>
                                            {details?.description}
                                        </DetailItem>
                                    </>
                                )}
                            </DetailRow>
                        </div>
                    </div>
                    <div className="flex items-center my-4 space-x-5 justify-normal min-w-16">
                        <div className="w-28">
                            <MyButton loading={isLoading}>
                                <EditIcon />
                                Update
                            </MyButton>
                        </div>
                        <div className="w-28">
                            <MyButton
                                loading={isLoading}
                                variant="outlined"
                                className="!text-error !border-error hover:!bg-red-600 hover:!text-white"
                                handleClick={onOpenDeleteDialog}
                            >
                                <DeleteIcon />
                                Delete
                            </MyButton>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
