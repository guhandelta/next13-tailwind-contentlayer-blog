import { cx } from '@/src/utils'
import Link from 'next/link'
import React from 'react'

const Tag = ({ link='#', name, ...props }) => {
    return (
        <Link href={link} className={cx('inline-block py-5 px-10 bg-dark text-white rounded-full capitalize font-semibold border-2 border-solid border-white hover:scale-105 transition-all ease duration-200', props.className)}>
            {name}
        </Link>
    )
}

export default Tag