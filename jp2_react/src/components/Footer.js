import { Stack, Typography, Box, Divider } from "@mui/material";
import logo from "../assets/images/JP_logo_black.png";
import jirivecko from "../assets/images/jiri_vecko_logo_sm.jpeg";

const Footer = () => {
  return (
    <>
      <Divider sx={{ mt: 4 }} />
      <Stack
        component="footer"
        direction={{ xs: "column", sm: "row" }}
        sx={{
          justifyContent: "space-evenly",
          alignItems: "center",
          p: 1,
          pt: 2,
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            textAlign: { xs: "center", sm: "left" }, 
          }}
        >
          © 2022–{new Date().getFullYear()} Jiří Vecko. Všechna práva vyhrazena.
        </Typography>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <a href="https://www.jirivecko.cz">
            <Typography
              variant="h6"
              sx={{
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              www.jirivecko.cz
            </Typography>
          </a>
        </Box>

        <a href="https://www.jirivecko.cz">
          {" "}
          <Box
            component="img"
            src={jirivecko}
            sx={{ p: 2 }}
            width="45px"
            alt="Logo"
          />
        </a>

        <a href="https://www.jpcandles.cz">
          <Box component="img" src={logo} height="45px" alt="Logo" />
        </a>
      </Stack>
    </>
  );
};

export default Footer;
