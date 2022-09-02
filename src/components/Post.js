import React from "react";
import { Box, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import Comment from "./Comment";

function Post({ user, post }) {
  return (
    <Box
      mb={2}
      pt={1}
      pl={2}
      pr={1}
      pb={1}
      sx={{
        backgroundColor: "#fff",
        borderRadius: ".2rem",
      }}
    >
      <Typography component="h3" variant="h6" sx={{ lineHeight: "2.5rem" }}>
        <strong>{user}</strong>
      </Typography>
      <Typography
        component="p"
        sx={{
          lineHeight: "1.4rem",
        }}
      >
        {post}
      </Typography>
      <ChatBubbleOutlineIcon
        onClick={() => console.log("comment icon clicked.")}
        sx={{
          color: "#C4C4C4",
          mt: 2,
          "&:hover": { color: "inherit", cursor: "pointer" },
        }}
      />
    </Box>
  );
}

export default Post;
