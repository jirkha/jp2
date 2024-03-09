import React from "react";
import portrait from "../../../assets/portrait_jiri_vecko_cut.jpg";
import github from "../../../assets/images/Github.png";
import jiri_vecko from "../../../assets/jiri_vecko_logo_sm.jpeg";
import linkedIn from "../../../assets/images/LinkedIn.png";
import { Box, Container, Divider, Stack, Typography } from "@mui/material";

function About() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        p: 1,
        my: 1,
        boxShadow: 3,
        borderRadius: 1,
        bgcolor: "#CCE5FF",
        transition: "background-color 0.3s ease-in-out", // Přidává plynulý přechod
        "&:hover": {
          bgcolor: "#AAD4FF",
        },
      }}
    >
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <img src={portrait} width="222" alt="Portrait" />
      </Box>
      <Container>
        <Typography
          variant="h4"
          color="#004C99"
          sx={{
            textAlign: "center",
            "@media (min-width: 600px)": {
              textAlign: "left",
            },
          }}
        >
          <strong>Jiří Vecko</strong>
        </Typography>

        <Stack direction={{ xs: "column", md: "row" }} sx={{ py: 1 }}>
          <Typography
            variant="h6"
            color="success"
            sx={{
              textAlign: "center",
              pb: 1,
              "@media (min-width: 600px)": {
                textAlign: "left",
                pb: 0,
              },
              pr: 2,
            }}
          >
            Full-Stack Developer
          </Typography>

          <Stack
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            flexWrap="wrap"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <a
              href="https://www.jirivecko.cz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={jiri_vecko} alt="GitHub Logo" height="30" />
            </a>
            <a
              href="https://github.com/jirkha/jp2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="GitHub Logo" height="30" />
            </a>
            <a
              href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedIn} alt="GitHub Logo" height="30" />
            </a>
          </Stack>
        </Stack>

        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            "@media (min-width: 600px)": {
              textAlign: "left",
            },
          }}
        >
          Mou největší motivací je touha učit se novým věcem. Proto jsem v roce
          2021 začal s programováním a neustále se posouvám vpřed.
        </Typography>
      </Container>
    </Stack>
  );
}

export default About;
