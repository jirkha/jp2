import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Container } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import { Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import logo from "../../assets/JP_logo_white_small.png";
import git from "../../assets/github-logo.png";
import "./navbar.css"

const navigationLinks = [
  { name: "Materiál", href: "/material" },
  { name: "Sklad", href: "/stock" },
  { name: "Prodejní kanály", href: "/sale" },
  { name: "Produkty", href: "/product" },
  { name: "Transakce", href: "/transaction" },
  { name: "Statistika", href: "/sales_statistic" },
];

export default function NavbarJP() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Logo"
            sx={{ mr: 2 }}
          >
            <Link href="/about">
              <img
                src={logo}
                width="100"
                alt="Logo"
              />
            </Link>
          </IconButton>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={5}
            >
              {navigationLinks.map((item) => (
                <Link
                  component="button"
                  key={item.name}
                  sx={
                    item.href === pathname.pathname
                      ? {
                          marginRight: 2,
                          //backgroundColor: "primary.light",
                          border: 2, //bílé okraje
                          borderRadius: "5px", //zaoblení
                          p: 1, // odsazení okraje od obsahu
                          fontWeight: "bold", //tloušťka písma
                          fontSize: 15, // velikost textu
                        }
                      : {
                          marginRight: 2,
                        }
                  }
                  variant="button"
                  underline="hover"
                  href={item.href}
                  label={item.name}
                  onClick={() => navigate(item.href)}
                  color={
                    item.href === pathname.pathname ? "inherit" : "inherit"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Box>
          <Box sx={{ bgcolor: "black", p: 1, px: 2, borderRadius: 4 }}>
            <a
              href="https://github.com/jirkha/jp2"
              target="_blank"
              rel="noopener noreferrer"
              className="my-link"
            >
              {" "}
              <Stack direction="row" spacing={1} alignItems="center">
                <img src={git} alt="GitHub Logo" height="30" />
                <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
                  GITHUB
                </Typography>
              </Stack>
            </a>
          </Box>

          <Box sx={{ display: { xs: "block", lg: "none" } }}>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>
      </Container>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                //className={styles.link}
                component="button"
                key={item.name}
                color="textPrimary"
                variant="button"
                underline="hover"
                href={item.href}
                onClick={() => (navigate(item.href), setOpen(false))}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}