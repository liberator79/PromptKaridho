
import { styles } from '@/utils/styles'
import { Chip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Future = () => {
    return (
        <div className='p-4 py-8 w-full relative md:p-[unset]  grid md:grid-cols-2'>
            <div className='col-span-1'>
                <Image
                    src={"https://pixner.net/aikeu/assets/images/tools-thumb.png"}
                    width={500}
                    height={500}
                    alt=''
                    className='md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]'
                />
            </div>
            <div className='col-span-1 w-full flex  items-center justify-center'>
                <div className='2xl:w-[60%]'>
                    <Chip size="lg" className={`${styles.button} bg-[#12211f] mb-[30px] h-[37px] rounded-md`}>Future</Chip>
                    <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>Unleashing The Glorious Future Of Ai generated Images</h5>
                    <p className={`${styles.paragraph} pb-5 text-[#8FADB6]`}>
                        One of the most prominent techniques in AI image generation is the
                        use of Generative Adversarial Networks
                    </p>
                </div>

            </div>
        </div>

    )
}

export default Future
