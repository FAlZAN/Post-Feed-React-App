import React from "react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";
// import from zustand store
import { useUserExistsStore, useUserStore } from "../store/Store.js";

function Login() {
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const updateDoesUserExists = useUserExistsStore(
    (state) => state.updateDoesUserExists
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (user) {
      updateDoesUserExists(true);
    } else {
      updateDoesUserExists(false);
    }
  }

  return (
    <Container
      component="main"
      className="Login"
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography component="p" variant="h5">
        Welcome to,
      </Typography>
      <Typography component="h1" variant="h3">
        POST IT
      </Typography>
      <Typography component="p" variant="h5">
        Enter your name, to get started.
      </Typography>
      <Box
        component="form"
        margin="normal"
        variant="outline"
        pt={2}
        pb={2}
        sx={{ "& button": { mt: 2 } }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Your Name"
          required
          fullWidth
          onChange={(e) => updateUser(e.target.value)}
        />
        <Button type="submit" variant="contained">
          GO!
        </Button>
      </Box>
    </Container>
  );
}

export default Login;
