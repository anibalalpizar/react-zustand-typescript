import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserStore {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const useUserStore = create(
  devtools<UserStore>(
    (set) => ({
      username: "username_test",
      email: "email_test",
      setUsername: (username: string) => set({ username }),
      setEmail: (email: string) => set({ email }),
    }),
    { name: "user", store: "user" }
  )
);

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostsStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostsStore = create(
  devtools<PostsStore>(
    (set) => ({
      posts: [{ id: "1", title: "title_test", content: "content_test" }],
      setPosts: (posts: Post[]) => set({ posts }),
    }),
    { name: "posts", store: "posts" }
  )
);
