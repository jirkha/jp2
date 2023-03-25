import { Box, Link, Stack, Typography } from "@mui/material";
import img from "../assets/j&p_img_candle.jpg";
import img2 from "../assets/pistacie1-8.jpg";
import img3 from "../assets/vosk_krabicka.jpg";

export default function Home() {
  return (
    <div>
      <Typography color="primary" variant="h4" sx={{ mt: 4 }}>
        Vítejte ve zkušební verzi
      </Typography>
      <Typography
        variant="h2"
        color="primary"
        //align="center" //zarovná doprostřed
        gutterBottom //vytvoří mezeru pod textem
      >
        <strong>Podnikový systém</strong>
      </Typography>
      <Typography color="primary" variant="h5" sx={{ mt: 2 }}>
        Pokračujte výběrem libovolné sekce a zkuste přidat materiál, produkt,
        prodejní kanál. Poté můžete vložit transakce, podívat se na statistiku a
        další.
      </Typography>
      <Typography color="primary" variant="h5" sx={{ mt: 3 }}>
        Pokud se chcete dozvědět více o tvůrci této aplikace, navštivte {" "}
        <a href="https://www.jirivecko.cz">www.jirivecko.cz</a>.
        {/* <Link sx={{ ml: 1 }} 
        //href="/aboutme"
        href="/aboutme#/aboutme/"
        >
          ZDE
        </Link> */}
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 6 }}
        sx={{ mt: 3 }}
        justifyContent="space-between"
      >
        <Box
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
        </Box>
      </Stack>
      <Typography variant="h6" sx={{ mt: 6, color: "error.main" }}>
        Verze slouží pouze k prezentačním účelům
      </Typography>
    </div>
  );
}
