import portrait from "../../../assets/portrait_jiri_vecko_cut.jpg";
import github from "../../../assets/images/Github.png";
import jiri_vecko from "../../../assets/jiri_vecko_logo_sm.jpeg";
import linkedIn from "../../../assets/images/LinkedIn.png";
import { Box, Container, Divider, Stack, Typography, Chip } from "@mui/material";

function About() {

  const techStack = [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "PostgreSQL",
    "REST API",
    "Material UI",
    "Axios",
    "Redux",
  ];

  return (
    <Container maxWidth="lg">
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
          <Box
            component="img"
            src={portrait}
            alt="Portrait"
            sx={{
              width: {
                xs: "180px",
                sm: "250px",
              },
              height: "auto",
            }}
          />
        </Box>

        <Container>
          <Typography
            variant="h5"
            color="#004C99"
            sx={{
              textAlign: "center",
              letterSpacing: {
                xs: "0em",
                sm: "0.025em",
                md: "0.05em",
              }, // em je relativní jednotka vůči velikosti písma, doporučená pro responsivní text
              "@media (min-width: 600px)": {
                textAlign: "left",
              },
            }}
          >
            <strong>Jiří Vecko</strong>
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ py: { xs: 0, md: 1 } }}
          >
            <Typography
              variant="subtitle1"
              color="success"
              sx={{
                textAlign: "center",
                letterSpacing: {
                  xs: "0em",
                  sm: "0.025em",
                  md: "0.05em",
                },
                pb: 1,
                "@media (min-width: 600px)": {
                  textAlign: "left",
                  pb: 0,
                },
                pr: 2,
              }}
            >
              <strong>Full-Stack Developer</strong>
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
                <img src={jiri_vecko} alt="GitHub Logo" height="25" />
              </a>
              <a
                href="https://github.com/jirkha/jp2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="GitHub Logo" height="25" />
              </a>
              <a
                href="https://www.linkedin.com/in/ji%C5%99%C3%AD-vecko-44579b127/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="GitHub Logo" height="25" />
              </a>
            </Stack>
          </Stack>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              letterSpacing: {
                xs: "0em",
                sm: "0.025em",
                md: "0.05em",
              },
              "@media (min-width: 600px)": {
                textAlign: "left",
              },
            }}
          >
            Vítejte v demo verzi aplikace, kterou jsem vytvořil pro drobného
            podnikatele. Umožňuje evidovat a spravovat materiál včetně
            vyskladnění a naskladnění, produkty, prodejní kanály, transakce a
            statistiku tržeb.
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                justifyContent: "center",
                marginTop: 1,
                "@media (min-width: 600px)": {
                  justifyContent: "flex-start",
                  marginTop: 2,
                },
              }}
            >
              {techStack.map((tech) => (
                <Chip key={tech} label={tech} color="primary" size="small" />
              ))}
            </Box>
          </Typography>
        </Container>
      </Stack>
    </Container>
  );
}

export default About;
