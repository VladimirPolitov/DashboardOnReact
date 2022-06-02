import {useMemo} from "react";

export const useSortedPost = (post, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...post].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return post
    }, [sort, post])
    return sortedPosts;
}


export const usePosts = (post, sort, query) => {
    const sortedPosts = useSortedPost(post, sort)
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
    return sortedAndSearchedPosts;
}