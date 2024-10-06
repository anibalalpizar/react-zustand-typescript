import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

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
  devtools(
    immer<PostsStore>((set) => ({
      posts: [],
      setPosts: (posts: Post[]) => set({ posts }),
      addPost: (post: Post) =>
        set((state) => {
          state.posts.push(post); // Immer will handle the mutation, DON'T use push in a normal zustand store, DONT MUTATE THE STATE
        }),
      removePost: (id: string) =>
        set((state) => {
          const index = state.posts.findIndex((post) => post.id === id);
          if (index !== -1) state.posts.splice(index, 1); // Immer will handle the mutation, DON'T use splice in a normal zustand store, DONT MUTATE THE STATE
        }),
    })),
    { name: "posts", store: "posts" }
  )
);
