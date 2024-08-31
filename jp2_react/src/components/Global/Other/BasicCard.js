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
    <Card
      variant="outlined"
      sx={{
        minWidth: 80,
        minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent>
        {/* <button> */}
        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={() => {
            if (typeItem === "Kategorie materiálu") {
              setCategory(type.name);
            }
            document.getElementById("table").scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {type.name}
        </Button>
        {/* </button> */}
        {typeCount >= 0 && (
          <Typography color="text.secondary" variant="subtitle1" sx={{ mt: 2 }}>
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
          variant="outlined"
          style={{
            borderColor: "rgba(255, 165, 0, 0.7)",
            borderWidth: 2,
            backgroundColor: "transparent",
            color: "rgba(255, 165, 0, 0.7)",
          }}
          onClick={() => props.edit(type)}
        >
          <span style={{ padding: "0 16px" }}>Upravit</span>
        </Button>
        <Box sx={{ margin: { xs: "2px 0", md: "0 2px" } }} />{" "}
        {/* Rozestup mezi tlačítky */}
        <Button
          size="small"
          variant="outlined"
          style={{
            borderColor: "rgba(255, 0, 0, 0.7)",
            borderWidth: 2,
            backgroundColor: "transparent",
            color: "rgba(255, 0, 0, 0.7)",
          }}
          onClick={(e) => props.delete(type, e)}
        >
          <span style={{ padding: "0 16px" }}>Vymazat</span>
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;
