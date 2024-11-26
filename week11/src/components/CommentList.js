import React, { useState, useEffect } from "react";
import Comment from "./Comment";

function CommentList() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.slice(0, 10))); // 상위 10개의 댓글만 표시
  }, []);

  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} name={comment.name} body={comment.body} />
      ))}
    </div>
  );
}

export default CommentList;
