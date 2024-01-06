import { Visibility, VisibilityOff } from '@mui/icons-material'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery'
import React, { useEffect, useState } from 'react'

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
    } = props
    const [showPwd, setShowPwd] = useState(false)
    const [isError, setIsError] = useState(helperTextIsError)
    const isMd = useMediaQuery('(min-width:784px)')
    const handleClickShowPassword = () => setShowPwd((show) => !show)

    useEffect(() => {
        setIsError((prev) => helperTextIsError)
    }, [helperTextIsError])

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <FormControl
            component={Stack}
            className="w-full "
            required={isRequired}
        >
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
                className={`bg-white rounded-xl md:h-[40px]  ${className}`}
                id={id}
                {...register(name, registerOptions)}
                autoComplete={autocomplete}
                error={isError}
                inputProps={inputProps}
                label={label}
                color="info"
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
