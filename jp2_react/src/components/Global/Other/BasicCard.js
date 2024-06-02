import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function BasicCard({ typeItem, type, typeCount, ...props }) {

  const { setCategory } = props;
  return (
    <Card sx={{ minWidth: 80, minHeight: 200 }}>
      <CardContent>
        {/* <button> */}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            if (typeItem === "Kategorie materiálu") {
              setCategory(type.name);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          {type.name}
        </Button>
        {/* </button> */}
        {typeCount >= 0 && (
          <Typography color="text.secondary" variant="body1" sx={{ mt: 2 }}>
            Počet položek: {typeCount}
          </Typography>
        )}
        {/* {{ type.note } !== "" && <Typography variant="body2">{type.note}</Typography>} */}
      </CardContent>
      <CardActions
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Button
          //disabled
          size="small"
          variant="contained"
          style={{ backgroundColor: "rgba(255, 165, 0, 0.7)" }}
          onClick={() => props.edit(type)}
        >
          Upravit
        </Button>
        <Box sx={{ margin: { xs: "5px 0", md: "0 5px" } }} />{" "}
        {/* Rozestup mezi tlačítky */}
        <Button
          size="small"
          variant="contained"
          style={{ backgroundColor: "rgba(255, 0, 0, 0.7)" }}
          onClick={(e) => props.delete(type, e)}
        >
          Vymazat
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;
