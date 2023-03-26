import { Box, Link, Stack, Typography } from "@mui/material";
import img from "../assets/j&p_img_candle.jpg";
import img2 from "../assets/pistacie1-8.jpg";
import img3 from "../assets/vosk_krabicka.jpg";

export default function Home() {
  return (
    <div>
      <Typography
        variant="h2"
        color="primary"
        sx={{ p: 3, pt: 6 }}
        //align="center" //zarovná doprostřed
        gutterBottom //vytvoří mezeru pod textem
      >
        <strong>Podnikový systém</strong>
      </Typography>
      <Typography color="primary" variant="h3" sx={{ p: 3 }}>
        Tato webová aplikace je určena výhradně pro J&P Candles.
      </Typography>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2, md: 6 }}
        sx={{ mt: 3 }}
        justifyContent="space-between"
        alignItems="center"
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
    </div>
  );
}
