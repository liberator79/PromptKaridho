import { styles } from '@/utils/styles'
import React from 'react'
import SellerCard from "./SellerCard"
const BestSellers = () => {
  return (
    <div className='mg-10 cursor-pointer'>
        <h1 className={`${styles.heading} p-2 font-Inter mb-5`}>
            Top Sellers
        </h1>
        <div className='flex flex-wrap gap-4'>
            <SellerCard />
            <SellerCard />
            <SellerCard />
        </div>
    </div>
  )
}

export default BestSellers
