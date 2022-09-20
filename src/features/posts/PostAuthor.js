import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

export function PostAuthor ({userId}){
    const users = useSelector(selectAllUsers)

    const foundUser = users.find(user => user.id == userId)

    return(
        <span>by {foundUser ? foundUser.name : 'Unknown author'}</span>
    )
}
