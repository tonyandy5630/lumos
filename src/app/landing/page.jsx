import Head from 'next/head'
import Nav from '@/components/landingpage/nav'
import Hero from '@/components/landingpage/Hero'
// import Features from '@/components/landingpage/features'
import About from '@/components/landingpage/about'



export default function Landing() {
    return (
        <>
        <Head>
            <title>Lumos App</title>
            <meta name="description" content='Generated by create next app'/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="favicon.ico"/>
        </Head>
        <Nav />
        <Hero/>
        {/* <Features/> */}
        <About/>
        </>
    )
}