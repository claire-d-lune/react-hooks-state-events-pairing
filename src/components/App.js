import React, {useState} from "react"
import video  from "../data/video.js";
import InfoSection from "./InfoSection.js";
import CommentSection from "./CommentSection"

function App() {
  console.log("Here's your data:", video);

  const [showComments, toggleShowComments] = useState(true)

  const comments = video.comments

  const handleHideComments = () => {
    toggleShowComments(() => !showComments)
  }

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <InfoSection 
      title={video.title} 
      views={video.views} 
      creationDate={video.createdAt}
      upvotes={video.upvotes}
      downvotes={video.downvotes}
      />
      <br></br>
      <button onClick= {handleHideComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
      <div>
        {showComments ? <CommentSection comments={comments}/> : null} 
      </div>
    </div>
  );
}

export default App;
