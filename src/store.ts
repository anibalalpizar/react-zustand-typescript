import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserSlice {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export interface PostSlice {
  username: string;
  setUsername: (username: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  username: "",
  email: "",
  setUsername: (username: string) => set(() => ({ username })),
  setEmail: (email: string) => set(() => ({ email })),
});

export const createPostSlice: StateCreator<PostSlice> = (set) => ({
  username: "",
  setUsername: (username: string) => set(() => ({ username })),
});

export const useAppStore = create(
  devtools<UserSlice & PostSlice>((...a) => ({
    ...createUserSlice(...a),
    ...createPostSlice(...a),
  }))
);
