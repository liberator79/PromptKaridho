import React from 'react'
type Props = {
    activeItem: number
}

const navItems = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "About Us",
        href: "/about"
    },
    {
        title: "Promps",
        href: "/markeplace",
    },
    {
        title: "Contact",
        href: "/contact"
    }
]


const Navigation = ({ activeItem }: Props) => {
    return (
        <div className='block md:flex'>
            {
                navItems.map(({ title, href }, index) => {
                    return (
                        <div key = {title}>
                            <h5 className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${activeItem === index && 'text-[#6dff4b]'}`}>
                                {title}
                            </h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Navigation
