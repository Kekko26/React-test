import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAuthor } from "./PostAuthor";
import { PostExtractor } from "./PostExtractor";
import { fetchPost, getError, getStatus, selectAllPosts } from "./postsSlice";
import { Reactions } from "./Reactions";
import { TimeAgo } from "./TimeAgo";

export function PostsList(){
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getStatus)
    const error = useSelector(getError)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(postsStatus === "idle"){
            dispatch(fetchPost())
        }
    },[postsStatus, dispatch])

    let content;
    if(postsStatus === 'Loading...'){
        content = <p>Loading...</p>
    }
    else if(postsStatus === "Successful"){
    const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date))
    content = orderedPosts.map(post => <PostExtractor key={post.id} post={post} />)
    }
    else if(postsStatus === "Error"){
        content = <p>An error has occurred: {error}</p>
    } 

    return(
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )

}