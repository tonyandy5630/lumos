'use client'
import React from 'react'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import dynamic from 'next/dynamic'
import { useMutation, useQuery } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import ServiceSchema from '@/utils/schema/service/serviceSchema'
import { addPartnerServiceAPI } from '@/api/partner.api'
const { toast } = dynamic(() => import('react-toastify'))
import { useForm } from 'react-hook-form'
import FormRow from './FormRow'
import Typography from '@mui/material/Typography'
import InputWrapper from './InputWrapper'
import { getAllCategoryAPI } from '@/api/category'
const Chip = dynamic(() => import('@mui/material/Chip'))
const FormGroup = dynamic(() => import('@mui/material/FormGroup'))
const FormControlLabel = dynamic(() => import('@mui/material/FormControlLabel'))
const Checkbox = dynamic(() => import('@mui/material/Checkbox'))
const MomIcon = dynamic(() => import('@mui/icons-material/PregnantWoman'))
const BabyIcon = dynamic(() => import('@mui/icons-material/ChildCareOutlined'))
import Skeleton from '@mui/material/Skeleton'
const FormHelperText = dynamic(() => import('@mui/material/FormHelperText'))

export default function ServiceForm() {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ServiceSchema) })
    const [categories, setCategories] = React.useState([])

    const {
        data: categoriesData,
        error,
        isLoading: categoriesLoading,
        isRefetching: categoriesRefetching,
        isSuccess: categoriesSuccess,
    } = useQuery({
        queryKey: ['/categories'],
        queryFn: getAllCategoryAPI,
        retryDelay: 300,
        retry: 3,
    })

    const addMutation = useMutation({
        mutationKey: ['/partner/service'],
        mutationFn: addPartnerServiceAPI,
    })

    const handleCheckCategory = (e) => {
        const categoryChecked = e.target.checked
        const categoryId = parseInt(e.target.value)
        let cateValues = []
        if (categoryChecked) {
            setCategories((prev) => {
                const newCate = [...prev]
                newCate.push(categoryId)
                cateValues = [...newCate]
                return newCate
            })
        } else {
            setCategories((prev) => {
                const index = prev.indexOf(categoryId)
                const newCate = [...prev]
                if (index > -1) {
                    newCate.splice(index, 1)
                    cateValues = [...newCate]
                }
                return newCate
            })
        }
        setValue('categories', cateValues)
    }
    const categoryCheckList = () => {
        if (categoriesLoading || categoriesRefetching) {
            return <Skeleton variant="rectangular" width={210} height={60} />
        } else if (categoriesSuccess) {
            return categoriesData.data.data.map((i) => {
                const icon = i.categoryId === 1 ? <MomIcon /> : <BabyIcon />
                return (
                    <FormControlLabel
                        key={i.categoryId}
                        control={
                            <Checkbox
                                color="secondary"
                                name={i.category}
                                value={i.categoryId}
                                onChange={handleCheckCategory}
                            />
                        }
                        label={
                            <>
                                {icon} {i.category}
                            </>
                        }
                    />
                )
            })
        }
        return <></>
    }

    const renderCategoryCheckList = React.useMemo(
        () => categoryCheckList,
        [categoriesLoading, categoriesRefetching, categoriesSuccess]
    )

    const onSubmit = async (data) => {
        try {
            await addMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    const status = data.data.statusCode
                    if (status === 200) {
                        toast.success('Add successfully', {
                            position: 'top-left',
                            autoClose: 2000,
                        })
                        reset()
                    }
                },
                onError: (error) => {
                    console.log()
                },
            })
        } catch (error) {}
    }

    return (
        <form
            className="flex flex-col items-start justify-between space-y-5 max-w-4/6 min-h-[190px] "
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormRow>
                <InputWrapper>
                    <FormInput
                        name="code"
                        id="code"
                        autocomplete="on"
                        label="Code"
                        isRequired={true}
                        register={register}
                        placeholder="Enter service code"
                        helperText={errors.code?.message}
                        helperTextIsError={errors.code !== undefined}
                        autoFocus={true}
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="serviceName"
                        id="serviceName"
                        autocomplete="on"
                        label="Service Name"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Service Name"
                        helperText={errors.serviceName?.message}
                        helperTextIsError={errors.serviceName !== undefined}
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="price"
                        id="price"
                        autocomplete="on"
                        label="Price"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Service's Price"
                        helperText={errors.price?.message}
                        helperTextIsError={errors.price !== undefined}
                    />
                </InputWrapper>
                <InputWrapper>
                    <FormInput
                        name="duration"
                        id="duration"
                        autocomplete="on"
                        label="Duration"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Service Duration"
                        helperText={errors.duration?.message}
                        helperTextIsError={errors.duration !== undefined}
                    />
                </InputWrapper>
                <InputWrapper full={true}>
                    <FormInput
                        multiline={true}
                        name="description"
                        id="description"
                        autocomplete="on"
                        label="Description"
                        isRequired={true}
                        register={register}
                        placeholder="Enter Description"
                        helperText={errors.description?.message}
                        helperTextIsError={errors.description !== undefined}
                    />
                </InputWrapper>
            </FormRow>
            <div className="flex flex-col items-center justify-start">
                <div className="flex justify-center space-x-2">
                    <Typography fontWeight="bold" fontSize={20}>
                        Category:
                    </Typography>
                    <Chip
                        color="secondary"
                        label="Mẹ"
                        variant="outlined"
                        sx={{ minWidth: '90px' }}
                        icon={<MomIcon />}
                    />
                </div>
                <FormGroup>{renderCategoryCheckList()}</FormGroup>
                {errors.categories ? (
                    <FormHelperText error>
                        {errors.categories.message}
                    </FormHelperText>
                ) : (
                    <></>
                )}
            </div>
            <div className="flex items-center justify-start space-x-2 w-fit">
                <MyButton
                    type="submit"
                    className="hover:bg-mosh hover:text-white !min-w-[90px] max-w-5"
                    loading={addMutation.isPending}
                >
                    Add
                </MyButton>
                <MyButton
                    variant="outlined"
                    className="!bg-white border border-black border-solid !min-w-[90px] max-w-5"
                    loading={addMutation.isPending}
                    handleClick={() => reset()}
                >
                    Reset
                </MyButton>
            </div>
        </form>
    )
}
