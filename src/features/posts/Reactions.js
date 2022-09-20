import { useDispatch } from "react-redux"
import { reactionAdd } from "./postsSlice";

export function Reactions({post}){
    const dispatch = useDispatch();

    const reactions = {
        "Thumb up": "👍",
        "Heart": "❤️",
        "Coffee": "☕",
        "Wow": "🤨"
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
    >
    {emoji} {post.reactions[name]}
    </button>
)})
    return(
        <div className="emoticons">
            {buttons}
        </div>
    )
}