import React, { useState } from "react";
import TableItem from "../components/Material/TableItem";
import { Container, Typography, Stack } from "@mui/material";
import ItemTypesList from "../components/Material/ItemTypesList";

function ListMaterialPage() {
  const [category, setCategory] = useState("");
  return (
    <div>
      <Container component="section" id="itemList">
        <Typography
          variant="h2"
          sx={{ mt: 3 }} //mezera nad textem
          color="primary"
          align="center" //zarovná doprostřed
          gutterBottom //vytvoří mezeru pod textem
        >
          Materiál
        </Typography>
        <TableItem category={category} setCategory={setCategory} />
      </Container>

      <Container component="section" id="itemForm">
        <Typography
          variant="h3"
          sx={{ mt: 5 }} //mezera nad textem
          color="primary"
          align="center" //zarovná doprostřed
          gutterBottom //vytvoří mezeru pod textem
        >
          &#9782; Kategorie materiálu
        </Typography>
        <Stack sx={{ justifyContent: "center" }} direction="row">
          <ItemTypesList setCategory={setCategory} />
        </Stack>
      </Container>
    </div>
  );
}

export default ListMaterialPage;
