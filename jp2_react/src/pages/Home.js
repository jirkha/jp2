import { Box, Stack, Typography } from "@mui/material";
import img from "../assets/pistacie1-8.jpg";

export default function Home() {

  return (
    <div>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          mt: {
            sm: 8,
            xs: 2,
          },
          m: 2,
        }}
      >
        <Box>
          <Typography
            color="black"
            variant="h5"
            sx={{
              p: 2,
            }}
          >
            Vítejte ve zkušební verzi
          </Typography>

          <Typography variant="h3" color="black" sx={{ p: 2 }} gutterBottom>
            <strong>Podnikový systém</strong>
          </Typography>
          <Typography color="black" variant="body1" sx={{ p: 2 }}>
            Pokračujte výběrem libovolné sekce a zkuste přidat materiál,
            produkt, prodejní kanál. Poté můžete vložit transakce, podívat se na
            statistiku a další.
          </Typography>
          <Typography color="black" variant="body1" sx={{ p: 2 }}>
            Pokud se chcete dozvědět více o tvůrci této aplikace, navštivte{" "}
            <a href="https://www.jirivecko.cz">www.jirivecko.cz</a>.
          </Typography>

          <Typography variant="body1" sx={{ p: 2, color: "error.main" }}>
            Verze slouží pouze k prezentačním účelům
          </Typography>
        </Box>
        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <img src={img} width="522" height="382" alt="img2" />
        </Box>
      </Stack>
    </div>
  );
}
