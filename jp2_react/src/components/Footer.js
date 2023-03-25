import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Stack, Typography, Box, Divider } from "@mui/material";
import logo from "../assets/JP_logo_black.png";
import jirivecko from "../assets/jiri_vecko_logo_sm.jpeg";

const Footer = () => {
  return (
    <>
      <Divider sx={{ mt: 5 }} />
      <Stack
        component="footer"
        direction={{ xs: "column", sm: "row" }}
        sx={{ justifyContent: "space-evenly", alignItems: "center", p: 1 }}
      >
        <Typography variant="h5" color="primary">
          © Jiří Vecko
        </Typography>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <a href="https://www.jirivecko.cz">
            <Typography variant="h6">www.jirivecko.cz</Typography>
          </a>
        </Box>

        <a href="https://www.jirivecko.cz">
          {" "}
          <Box
            component="img"
            src={jirivecko}
            //sx={{ width: "4%", minWidth: 55 }}
            sx={{ p: 2}}
            width="55px"
            alt="Logo"
          />
        </a>

        <a href="https://www.jpcandles.cz">
          <Box
            component="img"
            src={logo}
            height="55px"
            alt="Logo"
          />
        </a>
      </Stack>
    </>
  );
};

export default Footer;
