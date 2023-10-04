"use client";
import React from 'react'
import { useForm } from 'react-hook-form';
import { GitHubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from '../Icon'
import Link from 'next/link';

const Footer = () => {

    const { 
        register, // allows to register an input or select an element and apply certain validations
        handleSubmit, // receives the form data when form validation is successful
        formState: { errors } // holds thhe info of entire form, like isLoadin, isSubmitting, submitted, errors...etc
    } = useForm();
    // onSubmit() is called after all teh form validations are complete
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <footer className="mt-16 rounded-2xl bg-black m-10 flex flex-col items-center text-white font-in">
            <h3 className="mt-16 font-medium text-center capitalize text-4xl px-4">Interesting Stories | Updates | Guides</h3>
            <p className="mt-5 px-4 text-center w-3/5 font-white text-base">
                Subscribe to learn about technology updates. Join the community to stay up to date with a huge community
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[348px] flex items-stretch bg-white p-2 rounded mx-4'>
                <input 
                    type="email" 
                    placeholder="Email" {...register("Email", { required: true, maxLength: 80 })} 
                    className='w-full bg-transparent text-black focus:border-black focus:ring-0 border-0 border-b mr-2 pb-1 pl-0'
                />
        
                <input 
                    type="submit" 
                    className='bg-black text-white cursor-pointer font-medium rounded px-5 py-1'
                />
            </form>

            <div className="flex items-center mt-8">
                <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://linkedin.com/in/guhaprasaanthnandagopal">
                <LinkedInIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://github.com/guhandelta">
                <GitHubIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
                <a target='_blank' className='inline-block m-6 h-6 mr-4' href="https://twitter.com/guhandelta">
                <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
                </a>
            </div>

            <div className="w-full mt-24 relative font-medium border-t border-solid border-white px-8 py-6 flex flex-row items-center justify-between">
                <span className="text-center">&copy;Guhaprasaanth. All rights reserved.</span>
                <Link href="/sitemap.xml" className="text-center underline">sitemap.xml</Link>
                <div className="underline">
                    Made with <span className="text-red-600">&hearts;</span> by <a href="https://guhaprasaanthn.com" className="underline">Guha</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer