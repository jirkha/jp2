import { Box, Typography, Stack, Divider } from "@mui/material";
import React from "react";
//import img_cut from "../assets/portrait_jiri_vecko_cut.jpg";
import img from "../assets/portrait_jiri_vecko_cut_width.jpg";

function AboutMePage() {
  return (
    <div>
      <Typography
        variant="h2"
        color="primary"
        align="center" //zarovná doprostřed
        gutterBottom
        sx={{ mt: 2 }}
      >
        O AUTOROVI
      </Typography>
      <Divider sx={{ m: 2 }} />
      <Typography variant="h4" color="primary" sx={{ mb: 3 }}>
        Vítejte v mé první webové aplikaci!
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
          <Typography sx={{ mb: 2 }}>
            Programovat se učím od roku 2021 jako samouk. Internet je naštěstí
            plný návodů a rad, bez něj a obrovské motivace bych se neobešel :-)
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Jmenuji se <strong>Jirka Vecko</strong> a kontaktovat mě můžete na
            e-mailové adrese
            <strong> veckoj@seznam.cz</strong>.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Rád se neustále učím novým zajímavým věcem, proto jsem se chvíli po
            dokončení distančního studia na vysoké škole pustil do dalšího
            velkého životního projektu, kterým je programování.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Nejdříve jsem začal <strong>backendem (Python / Django)</strong>.
            Ten mi ale později přetal stačit, proto jsem navázal{" "}
            <strong>frontendem (JavaScript / ReactJS)</strong>. Na těchto
            platformách je postavena také aplikace původně určená pro projekt
            J&P candles, kterou zde můžete vyzkoušet.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Mým hlavním koníčkem byla vždy doprava, které jsem také věnoval svůj
            dosavadní profesní život. Touha po větší volnosti a životní změně mě
            ale motivuje změnit obor činnosti.
          </Typography>
          <Typography>
            Výsledkem mé dosavadní snahy je tato webová aplikace, k jejímuž
            prozkoumání vás tímto srdečně zvu :-)
          </Typography>
        </Box>

        <Box
          height="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <img src={img} width="465" height="426" alt="img" />
          {/* <img src={img_cut} width="434" height="274" alt="img_cut" /> */}
        </Box>
      </Stack>
    </div>
  );
}

export default AboutMePage;
