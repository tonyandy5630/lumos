import * as React from 'react'
import LandingPageLayout from '@/components/Layout/LandingPage'
import Typography from '@mui/material/Typography'
import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import InfoBox from '@/components/Pages/LandingPage/InfoBox'
import TickIcon from '@mui/icons-material/Done'
import LandingPageText from '@/constants/landingpage.const'
import ArrowIcon from '@mui/icons-material/ArrowForward'

const IBM = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

export default function ButtonAppBar() {
    return (
        <LandingPageLayout>
            <div className="relative min-w-full min-h-[28rem] bg-primary flex pl-40 items-center">
                <div className="absolute  bottom-0 right-16 bg-green rounded-t-full w-[600px] h-[300px]" />
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
            <div className="relative z-20 flex justify-start h-24 min-w-full px-32 py-3 bg-[#216C61] align-center">
                <div className="flex justify-between w-5/12 space-x-3 px-7">
                    <InfoBox title="Online Support">24/7</InfoBox>
                    <InfoBox title="Suppliers">100+</InfoBox>
                    <InfoBox title="Active Patients">1M+</InfoBox>
                </div>
                <Image
                    src="/black-nurse.png"
                    alt="nurse smiling"
                    width={650}
                    height={710}
                    priority={true}
                    className="absolute bottom-0 right-20"
                />
            </div>
            <div className="my-20 px-24 py-3 flex flex-col min-h-40 w-9/12 justify-center items-start bg-mosh">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    className="text-white"
                >
                    Download now
                </Typography>
                <div className="flex ml-5 justify-start items-center">
                    <Image
                        src="/google-play-badge.png"
                        width="200"
                        height="77"
                        priority={true}
                        alt="download on playstore"
                    />
                    <Image
                        src="/IOS-badge.svg"
                        width="170"
                        height="50"
                        priority={true}
                        alt="download on playstore"
                    />
                </div>
            </div>
            <div className="min-w-full flex justify-start  min-h-96  py-10 pl-36">
                <div className="flex justify-start w-10/12 space-x-24">
                    <Image
                        src="/why-choose.png"
                        alt="nurse taking care"
                        width={520}
                        height={320}
                    />
                    <div className="w-fit flex flex-col justify-between items-start space-y-3">
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            className="text-mosh"
                            gutterBottom
                        >
                            Why should you choose us ?
                        </Typography>
                        {LandingPageText.whyChooseUs.map((item) => (
                            <Typography
                                className="text-mosh w-fit"
                                gutterBottom
                            >
                                <span className="mr-1 ">
                                    <TickIcon />
                                </span>
                                {item}
                            </Typography>
                        ))}
                        <Typography
                            component="a"
                            fontWeight="bold"
                            className="underline underline-offset-4 text-mosh mt-3"
                            href="https://www.google.com/"
                        >
                            Learn more
                            <ArrowIcon />
                        </Typography>
                    </div>
                </div>
            </div>
        </LandingPageLayout>
    )
}
