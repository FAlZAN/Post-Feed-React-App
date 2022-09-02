import React, { useEffect } from "react";
import {
  Container,
  Box,
  OutlinedInput,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Post from "./Post";
// import store from zustand
import {
  useUserStore,
  useFetchedPostsStore,
  usePostStore,
} from "../store/Store";

const MainScreen = () => {
  const user = useUserStore((state) => state.user);
  const posts = useFetchedPostsStore((state) => state.posts);
  const updateFetchedPosts = useFetchedPostsStore(
    (state) => state.updateFetchedPosts
  );
  const storedPost = usePostStore((state) => state.post);
  const updatePost = usePostStore((state) => state.updateNewPost);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts", { method: "GET" })
      .then((response) => response.json())
      .then((data) => updateFetchedPosts(data));
  }, [updateFetchedPosts]);

  function handleNewPost(event) {
    event.preventDefault();
    console.log("create post submitted.");
    sendPostData();
  }

  function sendPostData() {
    fetch("http://127.0.0.1:5000/posts", {
      method: "POST",
      body: JSON.stringify({
        user: user,
        post: storedPost,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        updatePost("");

        fetch("http://127.0.0.1:5000/posts", { method: "GET" })
          .then((response) => response.json())
          .then((data) => updateFetchedPosts(data));
      });
  }

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box pt={1} pb={1}>
        <OutlinedInput
          component="search"
          placeholder="Search"
          size="small"
          fullWidth
          sx={{ backgroundColor: "#fff" }}
        />
        {/* <Button type="submit">Search</Button> */}
      </Box>

      <Box
        sx={{
          height: "81vh",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {posts.length === 0 ? (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="h3"
              variant="h5"
              sx={{
                color: "#c4c4c4",
              }}
            >
              No Post
            </Typography>
            <Typography
              component="p"
              variant="h6"
              sx={{
                color: "#c4c4c4",
              }}
            >
              guess you're going to be the first to post.
            </Typography>
          </Box>
        ) : (
          posts.map((post) => (
            <Post key={post.user} user={post.user} post={post.post} />
          ))
        )}
      </Box>
      <Box
        component="form"
        pt={1}
        pb={1}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
        onSubmit={handleNewPost}
      >
        <TextField
          type="text"
          placeholder="Feed"
          size="small"
          fullWidth
          required
          value={storedPost}
          onChange={(event) => updatePost(event.target.value)}
          sx={{ backgroundColor: "#fff" }}
        />
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ marginLeft: "1rem", marginBottom: ".1rem" }}
        >
          Post
        </Button>
      </Box>
    </Container>
  );
};

export default MainScreen;
