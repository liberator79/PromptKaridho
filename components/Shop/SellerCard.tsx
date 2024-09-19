import React from 'react'
import { Avatar, Card } from '@nextui-org/react'
import { styles } from '@/utils/styles'
import Ratings from '@/utils/Ratings'
const SellerCard = () => {
    return (
        <div>
            <Card className='py-4 bg-[#100d21] m-3 w-full flex flex-col items-center text-white border border-[#ffffff22]'>
                <Avatar src={"https://pixner.net/aikeu/assets/images/blog-details/a-one.png"} className="w-[80px] h-[80px]" />
                <span className={`${styles.label} py-2 text-xl`}>@{"Kalyani"}</span>
                <div className="flex items-center">
                    <span className={`${styles.label} pr-2`}>{"item?.ratings"}/5</span>
                    <Ratings rating={4} />
                </div>
                <span className={`${styles.label} py-2`}>
                    Total Sales: {"item?.allProducts"}
                </span>
            </Card>
        </div>
    )
}

export default SellerCard
