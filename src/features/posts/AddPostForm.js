
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectAllUsers } from "../users/usersSlice"
import { postAdd } from "./postsSlice"


export function AddPostForm(){
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const usersList = useSelector(selectAllUsers)

    const handleTitle = e => setTitle(e.target.value)
    const handleContent = e => setContent(e.target.value)
    const handleUser = e => setUserId(e.target.value)

    function onPostSaved(){
        if(title && content && userId) {
        dispatch(postAdd(title, content, userId))
        setTitle('')
        setContent('')
        setUserId('')
    }
        else{}
    }

    return(
        <section>
            <label htmlFor="postTitle">Post title:</label>
            <input 
            id="postTitle"
            name="postTitle"
            type='text'
            value={title}
            onChange={handleTitle}
            />
            
            <label>Post content:</label>
            <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={handleContent}
            />

            <select id="postAuthor" value={userId} onChange={handleUser}>
                <option value=""></option>
                {usersList.map(user => {
                    return(
                    <option key={user.id} value={user.id}>{user.name}</option>
                    )
                })}
            </select>

            <button type="button" onClick={onPostSaved}>Save post</button>
        </section>
    )

}