import dynamic from 'next/dynamic'
import FormControl from '@mui/material/FormControl'
const FormHelperText = dynamic(() => import('@mui/material/FormHelperText'))
const InputAdornment = dynamic(() => import('@mui/material/InputAdornment'))
const IconButton = dynamic(() => import('@mui/material/IconButton'))
const Visibility = dynamic(() => import('@mui/icons-material/Visibility'))
const VisibilityOff = dynamic(() => import('@mui/icons-material/VisibilityOff'))
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import useMediaQuery from '@mui/material/useMediaQuery'
import React from 'react'

export default function FormInput(props) {
    const {
        label,
        helperText,
        placeholder,
        inputType = 'standard',
        id,
        name,
        autocomplete,
        helperTextIsError,
        isRequired = false,
        inputProps,
        register,
        registerOptions,
        className,
        sx,
        children,
        autoFocus,
    } = props
    const [showPwd, setShowPwd] = React.useState(false)
    const [isError, setIsError] = React.useState(helperTextIsError)
    const isMd = useMediaQuery('(min-width:784px)')
    const handleClickShowPassword = () => setShowPwd((show) => !show)

    React.useEffect(() => {
        setIsError((prev) => helperTextIsError)
    }, [helperTextIsError])

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <FormControl className="w-full" required={isRequired}>
            <InputLabel
                htmlFor={id}
                size={isMd ? 'small' : 'normal'}
                sx={{
                    '&.Mui-focused': {
                        color: '#0A4F45',
                    },
                }}
            >
                {label}
            </InputLabel>
            <OutlinedInput
                className={`bg-white rounded-xl md:h-[40px] ${className}`}
                id={id}
                {...register(name, registerOptions)}
                autoComplete={autocomplete}
                error={isError}
                inputProps={inputProps}
                label={label}
                color="info"
                autoFocus={autoFocus}
                sx={{
                    fontSize: 14,

                    ...sx,
                }}
                placeholder={placeholder}
                type={inputType === 'password' && showPwd ? '' : inputType}
                endAdornment={
                    inputType === 'password' ? (
                        <InputAdornment position="end" className="mr-3">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPwd ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ) : (
                        ''
                    )
                }
            />

            {helperText !== '' || helperText !== undefined ? (
                <FormHelperText error={helperTextIsError}>
                    {helperText}
                </FormHelperText>
            ) : (
                <></>
            )}
            {children}
        </FormControl>
    )
}
