import * as React from "react";
import axios from "axios";
import "../App.css";
import { createPostUrl } from "../Constants";

export const CreatePost = ({user, fetchPosts}) => {
  const [content, setContent] = React.useState("");

  const submitHandler = async (e) => {
    try {
      await axios.post(createPostUrl, {
        content: content,
        author: user,
        created: Date.now(),
      });
      setContent("")
      fetchPosts()
    } catch (e) {
      alert("error occurred while uploading");
    }
  };

  return (
    <div className="CreatePost">
      <div><h2>{"Create a new post"}</h2></div>
      <textarea
        className="InputContent"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        rows="15"
        cols="100"
      />
      <div>
        <button disabled={content.length === 0} className="SubmitButton" onClick={submitHandler}>
          {"Post"}
        </button>
      </div>
    </div>
  );
};
