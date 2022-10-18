import React, { useState } from "react";
import Container from "../../layout/Container/Container";

import { TextField, Button, Box, Typography, Divider } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LinkTo from "../../components/LinkTo/LinkTo";
import GoogleIcon from "@mui/icons-material/Google";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { formValid } from "../../shared/formValid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const [submitError, setSubmitError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigate();

  const renderLoader = isLoading && <Loader />;

  const [form, setForm] = useState({
    email: {
      value: "",
      error: false,
      type: "email",
      validPattern: "email",
      helperText: "Please enter a valid email address",
    },
    password: {
      value: "",
      error: false,
      type: "password",
      validPattern: "password",
      helperText:
        "Minimum eight characters, at least one letter and one number.",
    },
  });

  const handleForm = (e) => {
    const { name: type, value } = e.target;

    setForm((form) => ({
      ...form,
      [type]: {
        ...form[type],
        value: value,
        error: formValid(form[type].validPattern, value),
      },
    }));
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigation("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = form;
    const { value: emailValue, error: emailError } = email;
    const { value: passwordValue, error: passwordError } = password;

    if (emailError || passwordError) {
      setIsLoading(false);
      toast.success("Enter valid data");
      return setSubmitError(true);
    }

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Succes Register...");
        setIsLoading(false);
        navigation("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {renderLoader}
      <Container element="section" customClass="px-3 py-5">
        <ToastContainer />
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
          <Typography
            variant="h5"
            component="h2"
            sx={{ mb: 3 }}
            align={"center"}
          >
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
                name={form.email.type}
                value={form.email.value}
                onChange={handleForm}
                required
                error={submitError ? form.email.error : false}
                helperText={
                  submitError && form.email.error
                    ? form.email.helperText
                    : false
                }
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
                name={form.password.type}
                value={form.password.value}
                onChange={handleForm}
                required
                error={submitError ? form.password.error : false}
                helperText={
                  submitError && form.password.error
                    ? form.password.helperText
                    : false
                }
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
            onClick={signInWithGoogle}
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
    </>
  );
};

export default Login;
