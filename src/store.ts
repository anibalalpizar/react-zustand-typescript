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
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}

export const usePostsStore = create(
  devtools<PostsStore>(
    (set) => ({
      posts: [],
      setPosts: (posts: Post[]) => set({ posts }),
      addPost: (post: Post) =>
        set((state) => ({ posts: [...state.posts, post] })),
      removePost: (id: string) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    { name: "posts", store: "posts" }
  )
);
