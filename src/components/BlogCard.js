import * as React from "react";
import { 
  Card, 
  CardActions, 
  CardContent, 
  Button, 
  Typography 
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ title, body, timeStamp, id, image }) {
  const navigate = useNavigate();

  // Function to truncate text
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Card
      className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      sx={{
        paddingX: { xs: "20px" },
        maxWidth: "100%",
        marginY: "20px",
      }}
    >
      {/* Blog Post Image */}
      {image && (
        <div 
          className="w-full h-48 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      )}

      <CardContent className="flex-grow">
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          className="font-bold text-xl"
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="pre"
          className="text-gray-600 whitespace-pre-wrap overflow-hidden text-ellipsis"
          sx={{ 
            maxHeight: '120px', 
            overflowY: 'auto',
            textOverflow: "ellipsis" 
          }}
        >
          {truncateText(body)}
        </Typography>
      </CardContent>
      
      <CardActions className="flex justify-between items-center p-4">
        <Typography 
          variant="small" 
          component="small" 
          color="text.secondary" 
          className="text-sm text-gray-500"
        >
          Last Updated {new Date(timeStamp).toLocaleDateString()}
        </Typography>
        <Button
          onClick={() => navigate("/blog/" + id)}
          variant="contained"
          size="small"
          className="ml-4"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}