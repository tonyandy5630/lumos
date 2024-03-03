export const userRole_c =
    process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_dev_role
        : process.env.r

const maxAge = 60 * 60 * 2 //* 2 hour

export const c_optns = {
    maxAge,
    sameSite: true,
}
