// @ts-nocheck
import * as React from 'react'
import LandingPageLayout from '@/components/Layout/LandingPage'
import Typography from '@mui/material/Typography'
import { IBM_Plex_Sans } from 'next/font/google'
import Image from 'next/image'
import OutlinedInput from '@mui/material/OutlinedInput'
import SearchIcon from '@mui/icons-material/Search'
import InfoBox from '@/components/Pages/LandingPage/InfoBox'
import TickIcon from '@mui/icons-material/Done'
import LandingPageText from '@/constants/Text/landingpage.const'
import ArrowIcon from '@mui/icons-material/ArrowForward'
import MyAvatarGroup from '@/components/Pages/LandingPage/AvatarGroup'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import Rating from '@mui/material/Rating'
import SendIcon from '@mui/icons-material/ArrowCircleRightOutlined'

const IBM = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
})

const avatarWidth = 45

export const metadata = {
    title: 'Lumos',
}

export default function LandingPage() {
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
            <div className="relative z-20 flex justify-start h-24 min-w-full px-40 py-3 bg-[#216C61] align-center">
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
                    className="absolute bottom-0 right-20 w-full max-w-[40rem] h-auto"
                />
            </div>
            <div className="flex flex-col items-start justify-center w-9/12 px-24 py-3 my-20 min-h-40 bg-mosh">
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    className="text-white"
                >
                    Download now
                </Typography>
                <div className="flex items-center justify-start ml-5">
                    <Image
                        src="/google-play-badge.png"
                        width="200"
                        height="77"
                        priority={true}
                        alt="download on playstore"
                        className="w-full h-auto max-w-52"
                    />
                    <Image
                        src="/IOS-badge.svg"
                        width="0"
                        height="0"
                        priority={true}
                        alt="download on playstore"
                        style={{ width: '166px', height: 'auto' }}
                    />
                </div>
            </div>
            <div className="flex justify-start min-w-full py-10 pl-40 my-3 min-h-96">
                <div className="flex justify-start w-10/12 space-x-24">
                    <Image
                        src="/why-choose.png"
                        alt="nurse taking care"
                        width={520}
                        height={320}
                        className="w-full max-w-[33rem] h-auto"
                    />
                    <div className="flex flex-col items-start justify-between space-y-3 w-fit">
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            className="text-mosh"
                            gutterBottom
                        >
                            {LandingPageText.whyChooseUs.title}
                        </Typography>
                        {LandingPageText.whyChooseUs.content.map((item) => (
                            <Typography
                                className="text-mosh w-fit"
                                key={item}
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
                            className="mt-3 underline underline-offset-4 text-mosh"
                            href="https://www.google.com/"
                        >
                            Learn more
                            <ArrowIcon />
                        </Typography>
                    </div>
                </div>
            </div>
            <div className="min-w-full flex items-center my-12 min-h-[26rem] py-10 px-40 bg-[#CAF4EE]">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-between max-w-lg space-y-5 ">
                        <Typography variant="h4" fontWeight="bold">
                            <div>
                                What
                                <span className="mx-2 text-[#1EB39E]">
                                    Our Member
                                </span>
                            </div>
                            Saying About Us
                        </Typography>
                        <Typography>
                            {LandingPageText.memberSayingAboutUs.content}
                        </Typography>
                        <div className="flex items-center justify-center space-x-5">
                            <MyAvatarGroup />
                            <Typography variant="subtitle1" fontWeight="bold">
                                500K+ Feedbacks
                            </Typography>
                        </div>
                    </div>
                    <Paper className="flex flex-col justify-between items-center p-10 w-6/12 space-y-8 !rounded-lg">
                        <div className="flex items-center justify-between min-w-full">
                            <div className="flex items-center justify-between space-x-5">
                                <Avatar
                                    src="/broken-image.jpg"
                                    alt="someone avatar"
                                    sx={{
                                        width: `${avatarWidth}px`,
                                        height: `${avatarWidth}px`,
                                    }}
                                />
                                <div className="flex flex-col items-start justify-center min-h-full">
                                    <Typography
                                        fontSize="15px"
                                        fontWeight="bold"
                                    >
                                        {
                                            LandingPageText.memberSayingAboutUs
                                                .member.name
                                        }
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        fontSize="13px"
                                    >
                                        {
                                            LandingPageText.memberSayingAboutUs
                                                .member.date
                                        }
                                    </Typography>
                                </div>
                            </div>
                            <Rating
                                name="read-only"
                                value={5}
                                size="large"
                                readOnly
                            />
                        </div>
                        <Typography paragraph fontSize="14px">
                            {LandingPageText.memberSayingAboutUs.member.content}
                        </Typography>
                    </Paper>
                </div>
            </div>
            <div className="min-w-full justify-stretch min-h-[25rem] flex px-40 my-10">
                <div className="flex items-center justify-between min-w-full">
                    <div className="flex flex-col items-start justify-center max-w-xl min-h-full space-y-5">
                        <div className="max-w-fit">
                            <Typography variant="h4">
                                The
                                <span className="mx-2 font-bold text-green">
                                    key value
                                </span>
                                of <span className="font-bold">Lumos</span>:
                            </Typography>
                            <div className="min-w-full text-xl text-center text-gray-600">
                                {LandingPageText.keyValue.subtitle}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {LandingPageText.keyValue.content.map((item) => {
                                const splittedItem = item.split(':')
                                const title = splittedItem[0]
                                const content = splittedItem[1]

                                return (
                                    <Typography fontSize="13px" key={title}>
                                        <span className="mr-2 font-bold">
                                            {title} :
                                        </span>
                                        {content}
                                    </Typography>
                                )
                            })}
                        </div>
                        <Typography
                            component="a"
                            fontWeight="bold"
                            className="mt-3 underline underline-offset-4 text-mosh"
                            href="https://www.google.com/"
                        >
                            Learn more
                            <ArrowIcon />
                        </Typography>
                    </div>
                    <Image
                        src="/key-value.png"
                        width={500}
                        height={200}
                        alt="nurse"
                        className="w-full max-w-[32rem] h-auto"
                    />
                </div>
            </div>
            <div className="flex items-center justify-center px-40 min-h-80">
                <div className="flex flex-col items-center justify-center w-full space-y-6 h-3/4 bg-green rounded-xl">
                    <Typography
                        variant="h4"
                        className="text-white"
                        fontWeight="bold"
                    >
                        {LandingPageText.subscribe.title}
                    </Typography>
                    <OutlinedInput
                        placeholder="Enter your email"
                        className="min-w-96 bg-slate-50 !rounded-3xl"
                        endAdornment={<SendIcon />}
                    />
                </div>
            </div>
        </LandingPageLayout>
    )
}
