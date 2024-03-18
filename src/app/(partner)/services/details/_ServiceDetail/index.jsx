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
    updatePartnerServiceAPI,
} from '@/api/service.api'
import Skeleton from '@mui/material/Skeleton'
import MyButton from '@/components/Button'
import { useForm } from 'react-hook-form'
import _ from 'lodash'
import { yupResolver } from '@hookform/resolvers/yup'
import { handleErrorMutation } from '@/utils/handleErrors'
const EditIcon = dynamic(() => import('@mui/icons-material/EditOutlined'))
const DeleteIcon = dynamic(() => import('@mui/icons-material/DeleteOutlined'))
const AlertDialog = dynamic(() => import('@/components/AlertDialog'))
const Backdrop = dynamic(() => import('@mui/material/Backdrop'))
import { toast } from 'react-toastify'
import NURSE_URL from '@/constants/URL/partner'
import { HttpStatusCode } from 'axios'
import { UpdateServiceSchema } from '@/utils/schema/service/serviceSchema'
import priceFormat from '@/utils/priceFormat'
const FormInput = dynamic(() => import('@/components/FormInput'))
const NotFound = dynamic(() => import('@/components/error/NotFound'))
const CancelIcon = dynamic(() => import('@mui/icons-material/CloseOutlined'))
const Rating = dynamic(() => import('@mui/material/Rating'))

const DETAIL_TITLES = [
    'Code',
    'Service name',
    'Duration',
    'Price',
    'Rating',
    'Categories',
    'Description',
]

export default function ServiceDetailSection() {
    const params = useParams()
    const router = useRouter()
    const [openDialog, setOpenDialog] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)

    const { data, isSuccess, isLoading, error, refetch, isRefetching } =
        useQuery({
            queryKey: ['/get/' + params.serviceId + 'service/detail'],
            queryFn: () => getPartnerServiceDetailAPI(params.serviceId),
            retry: 2,
            refetchOnWindowFocus: false,
        })

    const {
        register,
        handleSubmit,
        clearErrors,
        setError,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(UpdateServiceSchema),
    })

    const setDetailsFormValues = (obj) => {
        const newObj = _.omit(obj, [
            'categories',
            'status',
            'rating',
            'bookedQuantity',
            'code',
        ])
        for (const [key, value] of Object.entries(newObj)) {
            setValue(key, value)
        }
    }
    const details = useMemo(() => {
        if (isSuccess) {
            const res = data.data.data
            if (res) {
                setDetailsFormValues(res)
                return res
            }
        }
        return undefined
    }, [isSuccess, isRefetching])

    const deleteMutation = useMutation({
        mutationKey: ['delete/partner-service/' + details?.serviceId],
        mutationFn: () => deletePartnerServiceAPI(details?.serviceId),
    })

    const updateMutation = useMutation({
        mutationKey: ['update/partner-service/' + details?.serviceId],
        mutationFn: updatePartnerServiceAPI,
    })

    const onUpdateClick = () => {
        if (!isUpdate) setIsUpdate(true)
        return
    }

    const onCancelUpdate = () => {
        setDetailsFormValues(details)
        clearErrors()
        setIsUpdate(false)
    }

    const onCancelDialog = () => {
        setOpenDialog(false)
    }

    const onOpenDeleteDialog = () => {
        setOpenDialog(true)
    }

    const onSubmit = async (data) => {
        try {
            await updateMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    toast.success('Update service successfully', {
                        autoClose: 1000,
                    })
                    refetch()
                },
            })
        } catch (error) {
            if (error?.response.status === HttpStatusCode.UnprocessableEntity) {
                const validateErrors = error.response.data.errors

                for (const [key, value] of Object.entries(validateErrors)) {
                    setError(key.toLowerCase(), {
                        type: 'custom',
                        message: value[0],
                    })
                }
                return
            }
            handleErrorMutation(error)
            setIsUpdate(false)
        }
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="flex items-center justify-start min-w-full py-10 shadow-lg px-14 rounded-2xl bg-primary h-96 min-h-80">
                        <div className="flex items-center justify-between w-8/12 h-full space-x-5 ">
                            <DetailRow>
                                {isLoading || isRefetching ? (
                                    DETAIL_TITLES.map((i) => (
                                        <DetailItem key={i} title={i}>
                                            <Skeleton
                                                variant="text"
                                                sx={{
                                                    fontSize: '1rem',
                                                    minWidth: '20rem',
                                                }}
                                            />
                                        </DetailItem>
                                    ))
                                ) : (
                                    <>
                                        <DetailItem title="Code">
                                            {details?.code}
                                        </DetailItem>
                                        <DetailItem title="Service name">
                                            {!isUpdate ? (
                                                details?.name
                                            ) : (
                                                <FormInput
                                                    name="name"
                                                    id="name"
                                                    autocomplete="on"
                                                    label="Service Name"
                                                    register={register}
                                                    className="!min-w-[40rem]"
                                                    placeholder="Enter service Name"
                                                    autoFocus={true}
                                                    initialValue={details?.name}
                                                    helperText={
                                                        errors.name?.message
                                                    }
                                                    helperTextIsError={
                                                        errors.name !==
                                                        undefined
                                                    }
                                                />
                                            )}
                                        </DetailItem>
                                        <DetailItem title="Duration">
                                            {!isUpdate ? (
                                                details?.duration
                                            ) : (
                                                <FormInput
                                                    name="duration"
                                                    id="duration"
                                                    label="Duration"
                                                    register={register}
                                                    placeholder="Duration"
                                                    initialValue={
                                                        details?.duration
                                                    }
                                                    endAdornment="Minutes"
                                                    helperText={
                                                        errors.duration?.message
                                                    }
                                                    helperTextIsError={
                                                        errors.duration !==
                                                        undefined
                                                    }
                                                />
                                            )}
                                        </DetailItem>
                                        <DetailItem title="Price">
                                            {!isUpdate ? (
                                                priceFormat(
                                                    'Vi-vi',
                                                    'VND',
                                                    details?.price
                                                )
                                            ) : (
                                                <FormInput
                                                    name="price"
                                                    id="price"
                                                    label="Price"
                                                    register={register}
                                                    placeholder="Price"
                                                    initialValue={
                                                        details?.price
                                                    }
                                                    endAdornment="VND"
                                                    helperText={
                                                        errors.price?.message
                                                    }
                                                    helperTextIsError={
                                                        errors.price !==
                                                        undefined
                                                    }
                                                />
                                            )}
                                        </DetailItem>
                                        <DetailItem title="Rating">
                                            <Rating
                                                precision={0.5}
                                                readOnly
                                                value={details?.rating}
                                            />
                                        </DetailItem>
                                        <DetailItem title="Category">
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
                                        <DetailItem title="Description">
                                            {!isUpdate ? (
                                                details?.description
                                            ) : (
                                                <FormInput
                                                    name="description"
                                                    id="description"
                                                    label="Description"
                                                    multiline={true}
                                                    className="!min-w-[50rem]"
                                                    register={register}
                                                    placeholder="Description"
                                                    initialValue={
                                                        details?.description
                                                    }
                                                    helperText={
                                                        errors.description
                                                            ?.message
                                                    }
                                                    helperTextIsError={
                                                        errors.description !==
                                                        undefined
                                                    }
                                                />
                                            )}
                                        </DetailItem>
                                    </>
                                )}
                            </DetailRow>
                        </div>
                    </div>
                    <div className="flex items-center my-4 space-x-5 justify-normal min-w-16">
                        <div className="w-28">
                            {isUpdate ? (
                                <MyButton
                                    type="submit"
                                    key="submit"
                                    isLoading={isRefetching}
                                >
                                    <EditIcon />
                                    Save
                                </MyButton>
                            ) : (
                                <MyButton
                                    key="button"
                                    loading={isLoading || isRefetching}
                                    handleClick={onUpdateClick}
                                >
                                    <EditIcon />
                                    Update
                                </MyButton>
                            )}
                        </div>
                        <div className="w-28">
                            {!isUpdate ? (
                                <MyButton
                                    loading={isLoading}
                                    variant="outlined"
                                    className="!text-error !border-error hover:!bg-red-600 hover:!text-white"
                                    handleClick={onOpenDeleteDialog}
                                >
                                    <DeleteIcon />
                                    Delete
                                </MyButton>
                            ) : (
                                <div className="w-28">
                                    <MyButton
                                        loading={isRefetching}
                                        variant="outlined"
                                        className="!text-warning !border-warning hover:!bg-warning hover:!text-white"
                                        handleClick={onCancelUpdate}
                                    >
                                        <CancelIcon />
                                        Cancel
                                    </MyButton>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </form>
    )
}
