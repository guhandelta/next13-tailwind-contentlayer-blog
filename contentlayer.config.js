// makeSource controls the entire schema definiiton of the app
import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import GithubSlugger from 'github-slugger'

// defineDocumenType => defines the schema of the top-level document type, often referred to as model
const Blog = defineDocumentType(()=>({
    name: "Blog",
    filePathPatterns: "**/**/*.mdx",
    contentType: "mdx",
    fields:{
        title:{
            type: 'string',
            required: true
        },
        description:{
            type: 'string',
            required: true
        },
        image:{
            // type: 'string' will return just the URL, type: 'image' allows add dimensions, blur data,....etc
            type: 'image',
            required: true
        },
        author:{
            type: 'string',
            required: true
        },
        publishedAt:{
            type: 'date',
            required: true
        },
        updatedAt:{
            type: 'date',
            required: true
        },
        isPublished:{
            type: 'boolean',
            required: true
        },
        tags:{
            type: 'list',
            of: {
                type: 'string',
            }
        },
    },
    // Computed fields can be calculated on the fly rather than being read directly from the content source.
    computedFields: {
        URL: {
            type: 'string',
            resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
        },
        readingTime:{
            type: 'json',
            resolve: doc => readingTime(doc.body.raw),
        },
        toc:{
            type: 'json',
            resolve: async (doc) =>  {
                    /*
                        \n => matches the new line
                        () => named capturing group, which matches the # prepended on the line to mention the type of <h*> by the number of #
                        ? => makes a part of a pattern optional, meaning it may occur zero times or one time. It is added here as it not possible for all elements that are caught to be a h1-6 elements.
                        . => matches any character expect the new line
                        + => matches 1 or many characters
                        \s => matches 1 or more white space characters

                    */
                const regex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                // post.body.raw.matchAll(regex) => returns a RegExp String Iterator, Array.from(...) -> to create an array out of the iterator, to map around. The initial items in the array would be the contents extracted using the regex, the next erty would be groups, which holds 2 keys, flag, and content

                const slugger = new GithubSlugger();
                const headings = Array.from(doc.body.raw.matchAll(regex)).map(({ groups }) =>{
                    const flag = groups.flag;
                    const content = groups.content;

                    return{
                        level: flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
                        text: content,
                        slug: content ? slugger.slug(content) : undefined,
                    };
                });

                return headings;
            }
        },
    },
}));

const codeThemeOptions = {
    theme: 'github-dark'
}

export default makeSource({
    // options
    contentDirPath: 'content',
    documentTypes: [Blog],
    mdx: { 
        // remarkGFM plugin to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists).
        remarkPlugins: [ remarkGfm ],
        // rehypeSlug plugin to add #id's to headings. \ rehypeAutolinkHeadings - adds the heading(#) to the URL as per the behavior mentioned, a <a> would be present after the <h*> tag on inspect
        rehypePlugins: [ rehypeSlug, [ rehypeAutolinkHeadings, { behavior: "append" }], [rehypePrettyCode] ] 
    }
});