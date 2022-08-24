import React,{useEffect} from 'react';
import {useBlogViews} from '@libs/useBlogViews';

const PostMetrics = ({slug}:{slug:string}) => {
const {views,isError,isLoading,increment} = useBlogViews(slug,{revalidateOnMount:false})

useEffect(() => increment(),[])

return(
    <>
    {isError || isLoading? <p className="text-neutral-900/50 dark:text-neutral-100/50">Loading...</p>: (<span className="text-neutral-900/50 dark:text-neutral-100/50">{views}views</span>)}
    </>
)
}

export default PostMetrics;