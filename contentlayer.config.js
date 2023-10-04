// makeSource controls the entire schema definiiton of the app
import { makeSource, defineDocumentType } from '@contentlayer/source-files'

// defineDocumenType => defines the schema of the top-level document type, often referred to as model
const Blog = defineDocumentType(()=>({
    name: "Blog",
    filePathPatterns: "**/**/*.mdx",
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
            type: 'string',
            required: true
        },
        author:{
            type: 'string',
            required: true
        },
        createdAt:{
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
    },
}));

export default makeSource({
    // options
    contentDirPath: 'content',
    documentTypes: [Blog]
});