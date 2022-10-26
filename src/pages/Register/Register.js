import React, { useEffect, useState } from "react";
import Container from "../../layout/Container/Container";

import { TextField, Button, Box, Typography, Divider } from "@mui/material";

import LockIcon from "@mui/icons-material/Lock";
import SendIcon from "@mui/icons-material/Send";
import LinkTo from "../../components/LinkTo/LinkTo";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { formValid } from "../../shared/formValid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const Register = () => {
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
      helperText: "",
    },
    cPassword: {
      value: "",
      error: false,
      type: "cPassword",
      validPattern: "password",
      helperText: "",
    },
  });

  const handleForm = (e) => {
    const { name: type, value } = e.target;

    setForm((form) => ({
      ...form,
      [type]: {
        ...form[type],
        value: value,
      },
    }));
  };

  useEffect(() => {
    const findPasswords = Object.keys(form).filter(
      (element) => form[element].validPattern === "password"
    );

    const password1 = findPasswords[0];
    const password2 = findPasswords[1];

    for (let type in form) {
      const isConfirmValid = findPasswords.find((element) => element === type);

      if (isConfirmValid) {
        const correctPassword = formValid(
          form[type].validPattern,
          form[type].value
        );
        const samePassword = form[password1].value === form[password2].value;

        if (correctPassword) {
          setForm((form) => ({
            ...form,
            [type]: {
              ...form[type],
              error: formValid(form[type].validPattern, form[type].value),
              helperText:
                "Minimum eight characters, at least one letter and one number.",
            },
          }));
        } else if (samePassword) {
          setForm((form) => ({
            ...form,
            [type]: {
              ...form[type],
              error: false,
              helperText: "",
            },
          }));
        } else {
          setForm((form) => ({
            ...form,
            [password1]: {
              ...form[password1],
              error: true,
              helperText: "",
            },
            [password2]: {
              ...form[password2],
              error: true,
              helperText: "Password must be the same",
            },
          }));
        }
      } else {
        setForm((form) => ({
          ...form,
          [type]: {
            ...form[type],
            error: formValid(form[type].validPattern, form[type].value),
          },
        }));
      }
    }
  }, [form.email.value, form.password.value, form.cPassword.value]);

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = form;
    const { value: emailValue, error: emailvalid } = email;
    const { value: passwordValue, error: passwordvalid } = password;
    
    if (emailvalid || passwordvalid) {
      setIsLoading(false);
      toast.error("Please complete fix form");
      return setSubmitError(true);
    }

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Succes Register...");
        setIsLoading(false);
        navigation("/");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
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
                id="registerPassword"
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
                helperText={submitError ? form.password.helperText : false}
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
                name={form.cPassword.type}
                value={form.cPassword.value}
                onChange={handleForm}
                required
                error={submitError ? form.cPassword.error : false}
                helperText={submitError ? form.cPassword.helperText : false}
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
    </>
  );
};

export default Register;
