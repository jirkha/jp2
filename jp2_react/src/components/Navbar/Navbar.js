import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Link } from "@mui/material";
// import makeStyles from "@mui/styles/makeStyles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/material";
// import {Avatar} from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SwipeableDrawer } from "@mui/material";
import { Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import logo from "../../assets/JP_logo_white_small.png";
import { Grid } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import LogoutButton from "../Global/Login/LogoutButton";

const navigationLinks = [
  // { name: "T1", href: "/testpage" },
  // { name: "T2", href: "/testpage2" },
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
        <Toolbar disableGutters>
          <IconButton
            //size="large"
            edge="start"
            color="inherit"
            aria-label="Logo"
            sx={{ mr: 2 }}
          >
            <Link href="/">
              <img src={logo} 
              width="100" 
              //height="35" 
              alt="Logo" />
            </Link>
          </IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid container>
              <Grid item xs={12}>
                {navigationLinks.map((item) => (
                  <Link
                    //className={styles.link}
                    //indicatorColor="secondary"
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
                    //color="inherit"
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
              </Grid>
            </Grid>
          </Box>
        
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ maxWidth: 3, display: { xs: "none", md: "inline" } }}>
            <LogoutButton />
          </Box>
        </Toolbar>
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