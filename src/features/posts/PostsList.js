import { useDispatch, useSelector } from "react-redux";
import { PostAuthor } from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import { Reactions } from "./Reactions";
import { TimeAgo } from "./TimeAgo";

export function PostsList(){
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b)=> b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,60)}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date}/>
            </p>
            <p><Reactions post={post}/></p>
        </article>
        )
    )


    return(
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )

}