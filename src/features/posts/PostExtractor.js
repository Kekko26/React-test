import { PostAuthor } from "./PostAuthor";
import { Reactions } from "./Reactions";
import { TimeAgo } from "./TimeAgo";

export function PostExtractor({post}){


    return(
        <article>
            <h3>{post.title}</h3>
            {post.body ? <p>{post.body.substring(0,60)}</p> : <p>{post.content.substring(0,60)}</p>}
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timeStamp={post.date}/>
            </p>
            <p><Reactions post={post}/></p>
        </article>
    )
}