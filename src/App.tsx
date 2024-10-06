import { useState } from "react";
import { type Post, usePostsStore, useUserStore } from "./store";

function UpdateUserForm() {
  const { email, setUsername, setEmail, username } = useUserStore();

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function App() {
  const { email, username } = useUserStore();
  const { posts, addPost } = usePostsStore();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <h1>{username}</h1>
      <h2>{email}</h2>
      <UpdateUserForm />

      <div>
        <b>Create a new post</b>
      </div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={() => {
          addPost({ id: Math.random().toString(), title, content });
          setTitle("");
          setContent("");
        }}
      >
        Create post
      </button>

      <div>
        <h1>Posts</h1>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
