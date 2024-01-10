import * as React from 'react'
import LandingPageLayout from '@/components/Layout/LandingPage'
import Typography from '@mui/material/Typography'
import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import InfoBox from '@/components/Pages/LandingPage/InfoBox'

const IBM = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export default function ButtonAppBar() {
    return (
        <LandingPageLayout>
            <div className="min-w-full min-h-[28rem] bg-primary flex pl-40 items-center">
                <div className="flex flex-col justify-around space-y-3 h-2/3 ">
                    <Typography
                        variant="h3"
                        maxWidth="56%"
                        fontWeight="bold"
                        className={`!${IBM.className}`}
                    >
                        <span className="relative mr-3 text-secondary-dark">
                            Best
                            <Image
                                src="/underline.svg"
                                alt="underline"
                                width={300}
                                height={39}
                                className="absolute bottom-0 rotate-[-3deg]"
                            />
                        </span>
                        home health-care service
                        <span className="mx-3 text-secondary-dark">
                            platform
                        </span>
                        in Vietnam
                    </Typography>
                    <Typography paragraph maxWidth="500px">
                        Experience the future of healthcare with Lumos –
                        connecting quality home-based medical services at your
                        fingertips.
                    </Typography>
                    <div className=" max-w-[490px] h-fit">
                        <OutlinedInput
                            className="h-12 min-w-full !rounded-2xl"
                            startAdornment={<SearchIcon />}
                            placeholder="Search services"
                            sx={{
                                '&.Mui-focused': {
                                    borderColor: 'black',
                                    border: '1px solid ',
                                },
                                bgcolor: 'white',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-start h-24 min-w-full px-32 py-3 bg-[#216C61] align-center">
                <div className="flex justify-between w-5/12 space-x-3 px-7">
                    <InfoBox title="Online Support">24/7</InfoBox>
                    <InfoBox title="Suppliers">100+</InfoBox>
                    <InfoBox title="Active Patients">1M+</InfoBox>
                </div>
            </div>
        </LandingPageLayout>
    )
}
