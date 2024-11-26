import React from "react";
import CommentList from "./components/CommentList";
import './App.css'; // CSS 파일을 import

function App() {
  return (
    <div>
      <h1>Comments</h1>
      <CommentList />
    </div>
  );
}

export default App;
