import React, { useState } from "react";
import Container from "../../layout/Container/Container";

import {
  TextField,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LinkTo from "../../components/LinkTo/LinkTo";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, '✔✔✔✔✔LOGIN SUCCESS✅✅✅✅✅✅');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };

  return (
    <Container element="section" customClass="px-3 py-5">
      <Box
        sx={{
          mx: "auto",
          width: {
            xs: "100%",
            md: "50%",
          },
        }}
        className="box-shadow-1 p-5"
      >
        <Box align="center" my={3}>
          <Box
            sx={{
              display: "inline-grid",
              bgcolor: "primary.main",
              color: "primary.contrastText",
              borderRadius: "50%",
              p: 1,
            }}
          >
            <LockIcon fontSize="large" />
          </Box>
        </Box>
        <Typography variant="h5" component="h2" sx={{ mb: 3 }} align={"center"}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box>
            <TextField
              id="loginName"
              label="Email"
              variant="standard"
              sx={{
                width: "100%",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box>
            <TextField
              id="loginPassword"
              label="Password"
              variant="standard"
              type="password"
              sx={{
                width: "100%",
                my: 3,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              p: 2,
              fontWeight: "bold",
              width: '100%'
            }}
          >
            Login
          </Button>
          <p className="mt-3">
            Forgot
            <LinkTo
              customClass="has-text-weight-semibold ml-2"
              text="Password"
              link="/reset"
            />
            ?
          </p>
        </form>
        <Divider
          sx={{
            my: 3,
            width: "45%",
            mx: "auto",
          }}
        />
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            width: "100%",
            p: 2,
            color: "warning.main",
            border: 2,
            "&:hover": {
              border: 2,
              color: "primary.contrastText",
              bgcolor: "warning.main",
            },
          }}
        >
          Login with Google
        </Button>

        <p className="mt-3">
          Dont have an account?
          <LinkTo
            customClass="has-text-weight-semibold ml-2"
            text="Register"
            link="/register"
          />
        </p>
      </Box>
    </Container>
  );
};

export default Login;
