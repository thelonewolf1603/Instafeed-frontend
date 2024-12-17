import axios from "axios";
import * as React from "react";
import { Post } from "./Post";
import { CreatePost } from "./CreatePost";

export const BlogFeed = () => {
  const [posts, setPosts] = React.useState([]);
  const [isloading, setloading] = React.useState(false);
  const [error, seterror] = React.useState(null);
  const fetchPosts = React.useCallback(async () => {
    try {
      setloading(true);
      seterror(null);
      const res = await axios.get("http://localhost:8080/posts");
      setPosts(res.data);
      setloading(false);
    } catch (e) {
      seterror(error);
    }
  }, [error]);

  React.useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      <CreatePost fetchPosts={fetchPosts} />
      {!!error && <p>{error}</p>}
      <div className="Feed">
        {!isloading &&
          posts.map((post, idx) => {
            return <Post key={idx} data={post} />;
          })}
      </div>
    </>
  );
};
