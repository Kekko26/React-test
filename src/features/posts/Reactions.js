import { useDispatch } from "react-redux"
import { reactionAdd } from "./postsSlice";

export function Reactions({post}){
    const dispatch = useDispatch();

    const reactions = {
        "Thumb up": "๐",
        "Heart": "โค๏ธ",
        "Coffee": "โ",
        "Wow": "๐คจ"
    }

    function handleReaction(e){
       dispatch( reactionAdd({postId: post.id, reaction: e.target.value}) )
    }
        
    const buttons = Object.entries(reactions).map(([name, emoji])=>{
return (
    <button
        key={name}
        type="button"
        onClick={handleReaction}
        value={name}
        className="ReactionButton"
    >
    {emoji} {post.reactions[name]}
    </button>
)})

    return(
        <>
            {buttons}
        </>
    )
}