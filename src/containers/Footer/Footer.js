import React from "react";
import Container from "../../layout/Container/Container";
import { Box, Grid, Link } from "@mui/material";
import LinkTo from "../../components/LinkTo/LinkTo";

import "./Footer.scss";
import { ROUTE } from "../../shared/routing";

const Footer = () => {
  return (
    <Container fluid element="footer" customClass="footer">
      <Box
        px={{ xs: 3, sm: 10 }}
        pt={{ xs: 5, sm: 10 }}
        pb={{ xs: 5 }}
        color="white"
        className="bg--black-middle"
      >
        <Container customClass="p-3">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2}>
                Help
              </Box>
              <Box>
                <Link href={ROUTE.HOME} color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href={ROUTE.HOME} color="inherit">
                  Support
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2}>
                Account
              </Box>
              <Box>
                <LinkTo link={ROUTE.LOGIN} customClass="text-color-white">
                  Login
                </LinkTo>
              </Box>
              <Box>
                <LinkTo link={ROUTE.REGISTER} customClass="text-color-white">
                  Register
                </LinkTo>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} mb={2}>
                Default account for login
              </Box>
              <Box>
                <p color="inherit">Login: test@test.com</p>
              </Box>
              <Box>
                <p color="inherit">Password: qwert123</p>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <a
              className="text-color-white"
              href="https://github.com/imicadio/e-shop"
            >
              <i className="fa-brands fa-github"></i> Michał Jeszko
            </a>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default Footer;
