import {parseISO, formatDistanceToNow} from "date-fns"

export function TimeAgo ({timeStamp}){
    let timeago = ''
    if(timeStamp){
        let date = parseISO(timeStamp)
        let timePeriod = formatDistanceToNow(date)
        timeago = `${timePeriod} ago`
    }

    return(
        <span> &nbsp; {timeago}</span>
    )
}