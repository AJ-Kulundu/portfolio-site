import { defineDocumentType,makeSource } from 'contentlayer/source-files';

const Blog = defineDocumentType(() => ({
    name:'Blog',
    filePathPattern:`**/*.mdx`,
    contentType:'mdx',
    fields:{
        title:{
            type:'string',
            required:true, 
            description: 'The title of the blog post',           
        },
        description:{
            type:'string',
            required:true,
            description: 'The desription of the blog post',
        },
        date:{
            type:'string',
            required:true,
            description: 'The date of the blog post',
        },
        
    },
    computedFields:{
        url:{
            type:'string',
            resolve:(blog) => `/blog/${blog._raw.flattenedPath}`
        },
        slug:{
            type:'string',
            resolve:(blog) => blog._raw.flattenedPath
        }
    }
}))

export default makeSource({
    contentDirPath:'blog',
    documentTypes:[Blog]
})