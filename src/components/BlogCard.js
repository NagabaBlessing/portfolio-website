import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ title, body, timeStamp, id }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        paddingX: { xs: "20px" },
        maxWidth: "100vw",
        marginY: "20px",
        maxHeight: "200px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          noWrap
          variant="body2"
          component="pre"
          sx={{ textOverflow: "ellipsis" }}
          color="text.secondary"
        >
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate("/blog/" + id)}
          variant="contained"
          size="small"
        >
          Read More
        </Button>
      </CardActions>
      <Typography variant="small" component="small" color="text.secondary">
        Last Updated {new Date(timeStamp).toUTCString()}
      </Typography>
    </Card>
  );
}
