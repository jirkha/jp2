import { Box, Card, Link, Paper, Stack, Typography } from "@mui/material";
import img from "../assets/jp_img_candle_opacity3.jpg";
import img2 from "../assets/pistacie1-8.jpg";
import img3 from "../assets/vosk_krabicka.jpg";

export default function Home() {

  return (
    <div>
      <Paper
        sx={{
          backgroundImage: `url(${img})`,
          //backgroundSize:"cover",
          m: 0,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // opacity: 0.3,
          // position: "relative",
          //display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
        }}
      >
        <Typography color="primary" variant="h4" sx={{ p: 2, pt:6 }}>
          <span style={{ backgroundColor: "aliceblue" }}>
            Vítejte ve zkušební verzi
          </span>
        </Typography>

        <Typography
          variant="h2"
          color="primary"
          sx={{ p: 2 }}
          //align="center" //zarovná doprostřed
          gutterBottom //vytvoří mezeru pod textem
        >
          <span style={{ backgroundColor: "aliceblue" }}>
            <strong>Podnikový systém</strong>
          </span>
        </Typography>
        <Typography color="primary" variant="h5" sx={{ p: 2 }}>
          <span style={{ backgroundColor: "aliceblue" }}>
            Pokračujte výběrem libovolné sekce a zkuste přidat materiál,
            produkt, prodejní kanál. Poté můžete vložit transakce, podívat se na
            statistiku a další.
          </span>
        </Typography>
        <Typography color="primary" variant="h5" sx={{ p: 2 }}>
          <span style={{ backgroundColor: "aliceblue" }}>
            Pokud se chcete dozvědět více o tvůrci této aplikace, navštivte{" "}
            <a href="https://www.jirivecko.cz">www.jirivecko.cz</a>.
          </span>
        </Typography>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 6 }}
          sx={{ mt: 3 }}
          justifyContent="space-between"
        >
          {/* <Box
            height="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <img src={img3} width="261" height="191" alt="img3" />
          </Box>
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <img src={img} width="261" height="191" alt="img" />
          </Box>
          <Box
            height="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <img src={img2} width="261" height="191" alt="img2" />
          </Box> */}
        </Stack>
        <Typography variant="h6" sx={{ p: 2, color: "error.main" }}>
           <span style={{ backgroundColor: "aliceblue" }}>Verze slouží pouze k prezentačním účelům</span>
        </Typography>
      </Paper>
      {/* <Box
        component="img"
        src={img}
        //sx={{ width: "4%", minWidth: 55 }}
        sx={{
          m: 0,
          opacity: 0.3,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: -1,
          height: "100vh",
        }}
        //width="55px"
        alt="Logo"
      ></Box> */}
    </div>
  );
}
