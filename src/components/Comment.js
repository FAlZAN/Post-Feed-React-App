import React from "react";
import { Box, TextField, Typography } from "@mui/material";

function Comment({ comments }) {
  return (
    <Box
      sx={{
        height: "30vh",
        borderTop: "1px solid #C4C4C4",
        borderBottom: "1px solid #C4C4C4",
      }}
    >
      <Box pt={1} pl={1} sx={{ height: "23vh", overflowY: "scroll" }}>
        {comments.map((comment) => (
          <Typography mb={1} component="p">
            <strong>{comment.user}</strong> {comment.comment}
          </Typography>
        ))}
      </Box>
      <Box component="form" pr={2} pl={1}>
        <TextField
          placeholder="Write Comment"
          fullWidth
          size="small"
          required
        />
      </Box>
    </Box>
  );
}

export default Comment;
