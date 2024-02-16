// @ts-nocheck
'use client'
import React from 'react'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import STEPS from '@/constants/booking-steps.const'
import Typography from '@mui/material/Typography'
import LumosStepIcon from './StepIcon'
import theme from '@/utils/themes'

export default function BookingSteps(props) {
    const { currentStep } = props
    return (
        <div className="w-full py-5">
            <Stepper activeStep={currentStep}>
                {STEPS.map((step, i) => (
                    <Step key={step}>
                        <StepLabel StepIconComponent={LumosStepIcon}>
                            <Typography
                                variant="subtitle1"
                                fontWeight={i === currentStep ? 'bold' : '500'}
                                sx={{
                                    //* apply to typography that in the active step
                                    '.Mui-active > &': {
                                        color: theme.palette.info.dark,
                                    },
                                }}
                            >
                                {step}
                            </Typography>
                            {/* {step} */}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    )
}
