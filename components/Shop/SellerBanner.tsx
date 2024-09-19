import { styles } from '@/utils/styles'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const SellerBanner = () => {
    return (
        <div className='bg-[#FF641A] w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] rounded-xl md:m-2 flex items-center justify-center sellers-banner'>
            <div className='text-center'>
                <h1 className={`${styles.heading} !text-indigo-950 font-Inter`}>
                    Start Selling With Us
                </h1>
                <br />
                <br />
                <Link href="/create-shop">
                    <Button className='mb-3 p-6 rounded-md text-xl bg-black text-white font-Inter'>
                        <span>Get Started</span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default SellerBanner
