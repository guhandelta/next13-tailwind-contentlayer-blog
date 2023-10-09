import { cx } from '@/src/utils'
import Link from 'next/link'
import React from 'react'

const Category = ({ link="#", name, active, ...props }) => {
    return (
        <Link href={link} className={cx('inline-block py-2 px-10 rounded-full capitalize border-2 border-solid border-black hover:scale-105 transition-all ease duration-200 m-2 font-in', 
        props.className,
        active ? 'bg-black text-white' : 'bg-white text-black'
        )}>
            #{name}
        </Link>
    )
}

export default Category