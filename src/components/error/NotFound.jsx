'use client'
import React from 'react'
import '@/styles/pages/error404.scss'
import { useRouter } from 'next/navigation'

export default function NotFound() {
    const router = useRouter()
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="text-center col-sm-10 col-sm-offset-1">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">
                                    Cannot find the resource you looking for
                                </h3>

                                <a
                                    onClick={() => router.back()}
                                    className="link_404 hover:cursor-pointer"
                                >
                                    Go back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
