// makeSource controls the entire schema definiiton of the app
import { makeSource, defineDocumentType } from '@contentlayer/source-files'
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

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