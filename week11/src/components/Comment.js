import React from "react";

function Comment({ name, body }) {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{body}</h3>
    </div>
  );
}

export default Comment;
