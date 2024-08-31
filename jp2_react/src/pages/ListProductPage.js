import React from 'react'

import TableProduct from '../components/Product/TableProduct';
import CategoryIcon from "@mui/icons-material/Category";
import { Container, Typography, Stack } from "@mui/material";
import ProductTypesList from '../components/Product/ProductTypesList';


function ListProductPage() {

  return (
    <div>
      <Container component="section" id="productList">
        <Typography
          variant="h2"
          sx={{ mt: 3 }} //mezera nad textem
          color="primary"
          align="center" //zarovná doprostřed
          gutterBottom //vytvoří mezeru pod textem
        >
          Produkty
        </Typography>
        <TableProduct />
      </Container>

      <Container component="section" id="itemForm">
        <Typography
          variant="h3"
          sx={{ mt: 5 }} //mezera nad textem
          color="primary"
          align="center" //zarovná doprostřed
          gutterBottom //vytvoří mezeru pod textem
        >
          <CategoryIcon
            fontSize="large"
            sx={{
              verticalAlign: "middle",
              position: "relative",
              bottom: "0.10em",
            }}
          />{" "}
          Kategorie produktů
        </Typography>
        <Stack sx={{ justifyContent: "center" }} direction="row">
          <ProductTypesList />
        </Stack>
      </Container>
    </div>
  );
}

export default ListProductPage;