'use client'
import React from 'react'
import MyButton from '@/components/Button'
import FormInput from '@/components/FormInput'
import GoogleIcon from '@mui/icons-material/Google'
import ADMIN_URL from '@/constants/URL/admin'
import ROLES from '@/constants/roles.const'
import NURSE_URL from '@/constants/URL/partner'
import { setCookie } from 'cookies-next'
import { c_optns, userRole_c } from '@/constants/cookies.const'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context'
import { useMutation } from '@tanstack/react-query'
import { loginAPI } from '@/api/auth.api'
import { yupResolver } from '@hookform/resolvers/yup'
import LoginSchema from '@/utils/schema/auth/loginSchema'
import dynamic from 'next/dynamic'
const AlertDialog = dynamic(() => import('@/components/AlertDialog'))
const Backdrop = dynamic(() => import('@mui/material/Backdrop'))
const CircularProgress = dynamic(() => import('@mui/material/CircularProgress'))
import { useRouter } from 'next/navigation'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import LocalStorageUtils from '@/utils/localStorage'

export default function LoginForm() {
    const router = useRouter()
    const [openDialog, setOpenDialog] = React.useState(false)

    const onDialogClose = () => {
        setOpenDialog(false)
    }
    const {
        register,
        handleSubmit,
        resetField,
        setError,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(LoginSchema) })
    const { setUser } = useAuth()

    const loginMutation = useMutation({
        mutationKey: ['/login'],
        mutationFn: loginAPI,
    })

    const onSubmit = async (data) => {
        const storage = new LocalStorageUtils()
        try {
            await loginMutation.mutateAsync(data, {
                onSuccess: (data) => {
                    const user = data.data.data.userDetails
                    setUser(user)
                    const userRole = user.role
                    const token = data.data.data.token
                    setCookie(userRole_c, userRole, c_optns)
                    storage.setTokenToLS(token)
                    reset()
                    if (userRole === ROLES.admin) {
                        router.push(ADMIN_URL.HOMEPAGE)
                        return
                    }

                    if (userRole === ROLES.partner || userRole === null) {
                        router.push(NURSE_URL.BOOKING)
                    }

                    if (userRole === ROLES.customer) {
                        setOpenDialog(true)
                    }
                },
            })
        } catch (error) {
            const res = error?.response?.data?.data
            if (res) {
                for (const [key, error] of Object.entries(res)) {
                    resetField(key)
                    setError(key, {
                        type: 'custom',
                        message: error,
                    })
                }
            }
        }
    }

    return (
        <>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loginMutation.isPending}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {openDialog ? (
                <AlertDialog
                    title="Download app to use as Customer"
                    isOpen={openDialog}
                    handleCloseDialog={onDialogClose}
                >
                    Customer can only use on mobile app
                </AlertDialog>
            ) : (
                <></>
            )}
            <form
                className="flex flex-col items-start justify-center space-y-5 w-4/6 min-h-[260px] "
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack className="min-w-full" spacing={1}>
                    <FormInput
                        name="email"
                        id="username"
                        autocomplete="on"
                        label="Email"
                        isRequired={true}
                        register={register}
                        placeholder="Email"
                        autoFocus={true}
                        helperText={errors.email?.message}
                        helperTextIsError={errors.email !== undefined}
                    />
                    <FormInput
                        name="password"
                        id="password"
                        autocomplete="on"
                        label="Password"
                        inputType="password"
                        isRequired={true}
                        register={register}
                        placeholder="Enter password"
                        helperText={errors.password?.message}
                        helperTextIsError={errors.password !== undefined}
                    >
                        <Typography
                            component={Link}
                            href="/forget-password"
                            className="text-sm font-semibold underline text-mosh"
                            sx={{ fontFamily: 'Poppins' }}
                        >
                            Forget password
                        </Typography>
                    </FormInput>
                </Stack>
                <Stack className="min-w-full" spacing={1}>
                    <MyButton
                        type="submit"
                        className="hover:bg-mosh hover:text-white"
                        loading={loginMutation.isPending}
                    >
                        Log in
                    </MyButton>
                    <MyButton
                        variant="outlined"
                        type="submit"
                        className="!bg-white"
                        handleClick={() => console.log()}
                    >
                        <GoogleIcon sx={{ color: '#4285F4' }} />
                        Continue with google
                    </MyButton>
                </Stack>
            </form>
        </>
    )
}
