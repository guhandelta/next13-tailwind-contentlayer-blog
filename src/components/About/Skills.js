import React from 'react'

const Skills = () => {

    const SkillSet = [
        "next.js",
        "tailwind css",
        "figma",
        "javaScript",
        "web design",
        "Gatsby.js",
        "strapi",
        "firebase",
        "generative AI",
        "wireframing",
        "SEO",
        "framer motion",
        "sanity",
    ];

    return (
        <section className="w-full flex flex-col p-20 border-b-2 border-solid border-black text-black">
            <span className="font-semibold text-4xl text-purple-500">I'm Comfortable in...'</span>
            <ul className="flex flex-wrap mt-8 justify-start">
                {
                    SkillSet.map((item, index) => {
                        return <li key={index} className="font-semibold inline-block capitalize text-2xl px-12 py-5 border-2 border-solid border-black rounded mr-6 mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer font-rh"
                        >
                            {item}
                        </li>
                    })
                }
            </ul>
        </section>
    )
}

export default Skills