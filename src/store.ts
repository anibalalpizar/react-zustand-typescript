import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserSlice {
  username: string;
  email: string;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  username: "",
  email: "",
  setUsername: (username: string) => set(() => ({ username })),
  setEmail: (email: string) => set(() => ({ email })),
});

export const useAppStore = create(
  devtools<UserSlice>((...a) => ({
    ...createUserSlice(...a),
  }))
);
