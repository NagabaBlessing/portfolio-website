import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function BlogSideCard() {
  return (
    <Card
      sx={{
        maxWidth: "100vw",
        marginX: { xs: "20px", sm: "0px" },
        marginLeft: { sm: "20px" },
        marginY: "20px",
      }}
    >
      <CardMedia
        sx={{ height: 80 }}
        image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          sx={{ textOverflow: "ellipsis" }}
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogSideCard;
