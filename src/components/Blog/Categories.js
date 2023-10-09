import React from 'react'
import Category from './Category'
import { slug } from 'github-slugger'

const Categories = ({ categories, currentSlug }) => {
    return (
        <div className="px-20 mt-10 border-t-2 border-b-2 text-black py-4 items-center flex flex-wrap font-medium mx-10">
            {categories.map(category => <Category  
                                            key={category} 
                                            link={`/categories/${category}`} 
                                            name={category} 
                                            active={currentSlug === slug(category)}
                                        />
                                )}
        </div>
    )
}

export default Categories