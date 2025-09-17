import { use } from "react";
import Post from "./Post";

export default function Posts({ allPosts }) {
  const posts = use(allPosts);
  //   console.log(posts);
  return (
    <div>
      <h3>All Posts are here: {posts.length}</h3>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
