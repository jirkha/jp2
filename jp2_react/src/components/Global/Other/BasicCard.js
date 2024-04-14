import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BasicCard({ typeItem, type, typeCount, ...props }) {

  const { setCategory } = props;
  return (
    <Card sx={{ minWidth: 80, minHeight: 200 }}>
      <CardContent>
        {/* <button> */}
        <Button
          variant="outlined"
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
          <Typography color="text.secondary">
            Počet položek: {typeCount}
          </Typography>
        )}
        {/* {{ type.note } !== "" && <Typography variant="body2">{type.note}</Typography>} */}
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          //disabled
          size="small"
          variant="contained"
          style={{ backgroundColor: "rgb(255,165,0)" }}
          onClick={() => props.edit(type)}
        >
          Upravit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={(e) => props.delete(type, e)}
        >
          Vymazat
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;
