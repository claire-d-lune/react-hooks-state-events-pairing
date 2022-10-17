import React from "react";

const CommentSection = ({comments}) => {
    
    
    const commentList = 
        comments.map((comment) => {
            return (<div key={comment.comment + 1}>
                        <h4 key={comment.user}>{comment.user}</h4>
                        <p key={comment.comment}>{comment.comment}</p>
                    </div>
                    )
        }

    )

    return(<>{commentList}</>)
}

export default CommentSection