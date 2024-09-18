import { styles } from '@/utils/styles'
import { Avatar, Button, Card, Chip, Divider, Image } from '@nextui-org/react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Ratings from '@/utils/Ratings'
import Link from 'next/link'
const PromptCard = () => {
    return (
        <Card className='w-full md:w-[31%] 2xl:w-[23%] p-4 bg-[#130f23] m-3' radius='lg'>
            <div className="relative">
                <Image
                    src={'https://pixner.net/aikeu/assets/images/category/fourteen.png'}
                    className='w-full !max-h-[200px] object-cover'
                    width={300}
                    height={300}
                />
                <div className='absolute bottom-2 right-2 z-[999]'>
                    <div className='w-max  hover:bg-[#16252] duration-300 transition-opacity hover:text-black text-white p-[10px] items-center flex rounded-xl'>
                        <Chip size='sm'
                            className={`bg-black text-white`}
                        >
                            ChatGpt
                        </Chip>

                    </div>

                </div>
            </div>
            <div className='w-full flex justify-between py-2'>
                <h3 className={`${styles.label} text-[18px] text-white`}>
                    Animal Prompts
                </h3>
                <p className={`${styles.paragraph}`}>
                    $25.00
                </p>
            </div>
            <Divider className='bg-[#ffffff18] my-3' />
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center">
                    <Avatar name={"Jane"} />
                    <span className={`${styles.label} pl-3`}>@Jane</span>
                </div>
                <div className="flex mt-1 ml-2 800px:mt-0 800px:ml-0">
                    <Ratings rating={4.6} />
                </div>
            </div>
            <br/>
            <Link href={"/shop/1"} className='w-full'>
                <Button className={`mb-3 w-full bg-transparent border border-[rgb(255,100,26)] hover:bg-[rgb(255,100,26)] text-white hover:text-black duration-300 transition-opacity font-Inter font-[600]`}>
                    Buy
                </Button>
            </Link>
        </Card>
    )
}

export default PromptCard
