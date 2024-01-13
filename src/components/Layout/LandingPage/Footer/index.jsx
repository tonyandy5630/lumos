import React from 'react'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import LayoutLandingFooter from '@/constants/Layout/LandingPage/footer'
export default function LandingPageFooter() {
    return (
        <footer className="min-h-56 flex flex-col bg-mosh min-w-full px-40 py-10">
            <div className="flex justify-between items-start min-w-full min-h-60 max-h-56">
                <div className="flex flex-col min-h-40 justify-between items-start py-3 max-w-72 space-y-3 text-white">
                    <Image
                        src="/lumos_text.png"
                        alt="lumos logo"
                        width={100}
                        height={50}
                    />
                    <Typography paragraph fontSize="13px">
                        {LayoutLandingFooter.description}
                    </Typography>
                </div>
                <div className="flex flex-col space-y-3 min-h-40 justify-center items-start">
                    <Typography className="text-white" fontWeight="bold">
                        {LayoutLandingFooter.usefulLink.title}
                    </Typography>
                    <div>
                        {LayoutLandingFooter.usefulLink.content.map((item) => (
                            <div>
                                <Typography
                                    component="a"
                                    className="text-white"
                                    fontSize="13px"
                                    href={item.link}
                                    sx={{
                                        '&:hover': {
                                            textDecoration: 'underline',
                                            textUnderlineOffset: '4px',
                                        },
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-3 min-h-40 justify-center items-start">
                    <Typography className="text-white" fontWeight="bold">
                        {LayoutLandingFooter.address.title}
                    </Typography>
                    <div>
                        <iframe
                            src={LayoutLandingFooter.address.address}
                            width="400"
                            height="170"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Divider
                variant="fullWidth"
                flexItem={true}
                className="!border-white"
            />
            <div className="min-w-full text-center text-white text-sm pt-3">
                {LayoutLandingFooter.copyright}
            </div>
        </footer>
    )
}
