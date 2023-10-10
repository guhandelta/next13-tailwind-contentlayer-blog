"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-12 text-2xl font-medium leading-relaxed font-rh'>
        Hello! My name is <input 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-2xl border-b border-gray bg-transparent'
            type="text" 
            placeholder="your name" 
            {...register("name", {required: true})} 
        />&nbsp;
        and I want to discuss about a potential project. You can reach me at <input 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-2xl border-b border-gray bg-transparent'
            type="text" 
            placeholder="your email" 
            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} 
        />&nbsp;
        or reach out to me at <input 
            className='outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-2xl border-b border-gray bg-transparent'
            type="tel" 
            placeholder="your phone"
            {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} 
            />.&nbsp;
        Here are some details about my project: <br /> <br />
        <textarea 
            className='w-full outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-2xl border-b  border-gray bg-transparent' 
            placeholder='My project is about...'
            rows={3}
            {...register("Project Detaild", {})} 
        />

        <input 
            className='mt-8 font-medium inline-block capitalize text-xl px-8 py-3 border-2 border-solid border-black rounded cursor-pointer'
            type="submit"
            value="Send Request" 
            // onSubmit={}
        />
    </form>
    );
}