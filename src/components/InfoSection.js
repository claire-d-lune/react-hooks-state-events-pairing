import React, { useState } from "react"


const InfoSection = ({title, views, creationDate, upvotes, downvotes}) => {
    const [voteCount, setVoteCount] = useState({
        upvotes: upvotes,
        downvotes: downvotes
    })

    const handleLike = () => {
        const newVoteCount = {
            upvotes: (voteCount.upvotes + 1),
            downvotes: voteCount.downvotes
        }
        setVoteCount((voteCount) => (voteCount.upvotes = newVoteCount))
    }

    const handleDislike = () => {
        const newVoteCount = {
            upvotes: voteCount.upvotes,
            downvotes: (voteCount.downvotes + 1) 
        }
        setVoteCount(() => newVoteCount)
    }

    return(
    <div>
        <h3>{title}</h3>
        <span>{views + " views | "}</span>
        <span>{creationDate}</span>
        <br/>
        <button onClick={handleLike} value={voteCount.upvotes}>{voteCount.upvotes + "👍"}</button>
        <button onClick={handleDislike} value={voteCount.downvotes}>{voteCount.downvotes + "👎"}</button>
    </div>)
}

export default InfoSection