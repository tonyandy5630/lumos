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
            <div className="min-w-full flex justify-start my-3 min-h-96 py-10 pl-40">
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
                            {LandingPageText.whyChooseUs.title}
                        </Typography>
                        {LandingPageText.whyChooseUs.content.map((item) => (
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
            <div className="min-w-full flex items-center my-12 min-h-[26rem] py-10 px-40 bg-[#CAF4EE]">
                <div className="w-full flex justify-between items-center">
                    <div className="flex flex-col justify-between items-start max-w-lg space-y-5 ">
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
                        <div className="flex justify-center items-center space-x-5">
                            <MyAvatarGroup />
                            <Typography variant="subtitle1" fontWeight="bold">
                                500K+ Feedbacks
                            </Typography>
                        </div>
                    </div>
                    <Paper className="flex flex-col justify-between items-center p-10 w-6/12 space-y-8 !rounded-lg">
                        <div className="flex justify-between items-center min-w-full">
                            <div className="flex justify-between items-center space-x-5">
                                <Avatar
                                    src="/broken-image.jpg"
                                    alt="someone avatar"
                                    sx={{
                                        width: `${avatarWidth}px`,
                                        height: `${avatarWidth}px`,
                                    }}
                                />
                                <div className="flex flex-col justify-center items-start min-h-full">
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
                <div className="min-w-full flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start min-h-full max-w-xl space-y-5">
                        <div className="max-w-fit">
                            <Typography variant="h4">
                                The
                                <span className="mx-2 text-green font-bold">
                                    key value
                                </span>
                                of <span className="font-bold">Lumos</span>:
                            </Typography>
                            <div className="min-w-full text-center text-gray-600 text-xl">
                                {LandingPageText.keyValue.subtitle}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {LandingPageText.keyValue.content.map((item) => {
                                const splittedItem = item.split(':')
                                const title = splittedItem[0]
                                const content = splittedItem[1]

                                return (
                                    <Typography fontSize="13px">
                                        <span className="font-bold mr-2">
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
                            className="underline underline-offset-4 text-mosh mt-3"
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
                    />
                </div>
            </div>
            <div className="flex justify-center items-center px-40 min-h-80">
                <div className="flex flex-col space-y-6 w-full h-3/4 bg-green rounded-xl justify-center items-center">
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
