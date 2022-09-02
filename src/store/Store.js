import create from "zustand";

//for checking if user exists
const userExistsStore = (set) => ({
  doesUserExists: false,
  updateDoesUserExists: (update) =>
    set((state) => ({ doesUserExists: update })),
});

//to store user name
const userStore = (set) => ({
  user: "",
  updateUser: (newUser) => set((state) => ({ user: newUser })),
});

//to store fetched post from the server
const fetchedPostsStore = (set) => ({
  posts: [],
  updateFetchedPosts: (updatePosts) =>
    set((state) => ({ ...state, posts: updatePosts })),
});

//to store new post
const postStore = (set) => ({
  post: "",
  updateNewPost: (newPost) => set((state) => ({ post: newPost })),
});

const useUserExistsStore = create(userExistsStore);
const useUserStore = create(userStore);
const useFetchedPostsStore = create(fetchedPostsStore);
const usePostStore = create(postStore);

export { useUserExistsStore, useUserStore, useFetchedPostsStore, usePostStore };
