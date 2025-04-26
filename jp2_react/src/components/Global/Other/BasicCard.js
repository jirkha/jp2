import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function BasicCard({ typeItem, type, typeCount, ...props }) {
  const { setCategory } = props;
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 100,
        minHeight: 180,
        paddingX: "5px",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardContent component="container">
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "primary.main",
            borderColor: "primary.main",
            "&:hover": {
              backgroundColor: "#E0E0E0",
            },
            height: "55px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
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
          <Typography
            color="text.secondary"
            variant="subtitle1"
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          >
            Položek: {typeCount}
          </Typography>
        )}
        {/* {{ type.note } !== "" && <Typography variant="body2">{type.note}</Typography>} */}
      </CardContent>
      <CardActions
        disableSpacing={true}
        sx={{
          justifyContent: { xs: "center", sm: "space-around" },
          gap: "3px"
        }}
      >
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => props.edit(type)}
        >
          <EditIcon />
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={(e) => props.delete(type, e)}
        >
          <DeleteForeverIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;