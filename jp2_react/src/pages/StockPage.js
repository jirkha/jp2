import React from "react";
import StorageForm from "../components/Stock/StorageForm";
import RemovalForm from "../components/Stock/RemovalForm";
import TableStorage from "../components/Stock/TableStorage";
import TableRemoval from "../components/Stock/TableRemoval"
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

import { Container, Typography, Stack, Divider, Box } from "@mui/material";

function StockPage() {
  return (
    <div>
      <Container component="section" id="storageForm">
        <Typography
          variant="h2"
          sx={{ mt: 3 }} //mezera nad textem
          color="primary"
          align="center" //zarovná doprostřed
          //gutterBottom //vytvoří mezeru pod textem
        >
          Sklad
        </Typography>
        <Stack
          justifyContent="space-around" //vzájemná poloha
          //direction={{ xs: "column", xl: "row" }}
          direction="column"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          sx={{ mb: 5 }} //mezera pod komponentou
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ mt: 3 }} //mezera nad textem
              color="primary"
              align="center" //zarovná doprostřed
              gutterBottom //vytvoří mezeru pod textem
            >
              <ArchiveIcon
                fontSize="large"
                sx={{
                  verticalAlign: "middle",
                  position: "relative",
                  bottom: "0.10em",
                }}
              />{" "}
              Naskladnění
            </Typography>
            <TableStorage />
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ mt: 3 }} //mezera nad textem
              color="primary"
              align="center" //zarovná doprostřed
              gutterBottom //vytvoří mezeru pod textem
            >
              <UnarchiveOutlinedIcon
                fontSize="large"
                sx={{
                  verticalAlign: "middle",
                  position: "relative",
                  bottom: "0.10em",
                }}
              />{" "}
              Vyskladnění
            </Typography>
            <TableRemoval />
          </Box>
        </Stack>

        {/* <Stack
          justifyContent={{sm: "center", md: "space-around"}} //vzájemná poloha
          direction={{ sm: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          alignItems="flex-start"
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{ mt: 3 }} //mezera nad textem
              color="primary"
              align="center" //zarovná doprostřed
              gutterBottom //vytvoří mezeru pod textem
            >
              &#9782; Naskladnit
            </Typography>
            <StorageForm />
          </Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ mt: 3 }} //mezera nad textem
              color="primary"
              align="center" //zarovná doprostřed
              gutterBottom //vytvoří mezeru pod textem
            >
              &#9782; Vyskladnit
            </Typography>
            <RemovalForm />
          </Box>
        </Stack> */}
      </Container>
      {/* </section> */}
    </div>
  );
}

export default StockPage;
