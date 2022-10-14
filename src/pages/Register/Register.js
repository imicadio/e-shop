import React, { useState } from "react";
import Container from "../../layout/Container/Container";

import { TextField, Button, Box, Typography, Divider } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LinkTo from "../../components/LinkTo/LinkTo";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);

    if (password !== confirmPassword) return console.log('🥴🥴🥴ERROR🥴🥴🥴');
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user, '✔✔✔✔✔✅✅✅✅✅✅');
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
          Register
        </Typography>
        <form onSubmit={registerUser}>
          <Box>
            <TextField
              id="registerName"
              label="Email"
              variant="standard"
              sx={{
                width: "100%",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box>
            <TextField
              id="registerPassword"
              label="Password"
              variant="standard"
              type="password"
              sx={{
                width: "100%",
                my: 3,
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Box>
          <Box>
            <TextField
              id="registerConfirmPassword"
              label="Confirm password"
              variant="standard"
              type="password"
              sx={{
                width: "100%",
                mb: 3,
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{
              p: 2,
              fontWeight: "bold",
              width: "100%",
            }}
          >
            Register
          </Button>
        </form>
        <Divider
          sx={{
            my: 3,
            width: "45%",
            mx: "auto",
          }}
        />
        <p className="mt-3">
          Already an account?
          <LinkTo
            customClass="has-text-weight-semibold ml-2"
            text="Login"
            link="/login"
          />
        </p>
      </Box>
    </Container>
  );
};

export default Register;
