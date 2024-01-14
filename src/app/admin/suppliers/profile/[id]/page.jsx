import AdminLayout from '@/components/Layout/Admin'
import React from 'react'
import ProfileBanner from '@/components/ProfileBanner'
import Stack from '@mui/material/Stack'
import UserInfoBox from '@/components/Pages/SupplierProfilePage/InfoBox'
import { green, orange, purple } from '@/constants/SupplierProfilePage.const'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import ReviewTab from '@/components/Pages/SupplierProfilePage/ReviewTab'
export const metadata = {
    title: 'Supplier Profile Page',
    description: 'View a supplier profile to know their specialty and exp year',
}

const REVIEWS = [
    {
        name: 'test1',
        description:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
    {
        name: 'test2',
        description:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
    {
        name: 'test3',
        description:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
    {
        name: 'test4',
        description:
            'Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.',
    },
]

export default function SupplierProfile() {
    const handleGotoPortfolio = async () => {
        'use server'
        return
    }

    const reviewTabs = REVIEWS.map((item) => (
        <ReviewTab key={item.name} name={item.name}>
            {item.description}
        </ReviewTab>
    ))

    return (
        <AdminLayout>
            <ProfileBanner
                actionButton="Portfolio"
                name="Dr. Maria Waston"
                title="Cardio Specialist"
                handleActionButtonClick={handleGotoPortfolio}
            />
            <Stack
                className="h-20 min-w-full my-5"
                justifyContent="center"
                alignItems="center"
            >
                <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    className="w-6/12 min-h-full bg-secondary rounded-3xl"
                >
                    <UserInfoBox color={purple} title="Patients">
                        350
                    </UserInfoBox>
                    <UserInfoBox color={green} title="Exp year">
                        350
                    </UserInfoBox>
                    <UserInfoBox color={orange} title="Reviews">
                        350
                    </UserInfoBox>
                </Stack>
            </Stack>
            <Stack
                alignItems="start"
                className="min-w-full px-8 py-3 my-5 min-h-24 rounded-3xl"
                sx={{ bgcolor: '#F8F8F3' }}
            >
                <Typography variant="h6" fontWeight="bold">
                    Profile Description{' '}
                </Typography>
                <Typography paragraph sx={{ color: '#828282' }}>
                    Profile Description Specific tasks depend on your specialty
                    - for instance, the work surgeons carry out on a daily basis
                    is completely different from the workload of an accident and
                    emergency (A&E) doctor. Regardless of your speciality, as a
                    hospital doctor youll need to: monitor and provide general
                    care to patients on hospital wards and in outpatient
                    clinics. admit patients requiring special care. followed by
                    investigations and treatment. examine and talk to patients
                    to diagnose their medical conditions. carry out specific
                    procedures, e.g. performing operations and specialist
                    investigations.
                </Typography>
            </Stack>
            <div className="flex items-center justify-center min-w-full h-fit">
                <Typography variant="h3" fontWeight="700">
                    Reviews
                </Typography>
            </div>
            <Grid
                container
                columnSpacing={1}
                rowGap={2}
                className="min-w-full "
            >
                {reviewTabs}
            </Grid>
        </AdminLayout>
    )
}

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

// export default function Page({ params, searchParams }) {}
