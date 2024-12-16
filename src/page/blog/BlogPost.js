import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Delete as DeleteIcon, 
  Edit as EditIcon 
} from "@mui/icons-material";
import {
  Alert,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Typography
} from "@mui/material";
import { Slide } from "@mui/material";
import { auth } from "../../Firebase/FirebaseConfig";
import FireStore from "../../Firebase/Firestore";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BlogPost() {
  const { id } = useParams();
  const firestore = new FireStore();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [message, setMessage] = useState({ message: null, severity: null });
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const deleteHandler = async () => {
    setLoading(true);
    try {
      const val = await firestore.deletePost(post.id);
      if (val.code === 1) {
        setMessage({ message: val.val.message, severity: "error" });
        setOpen(true);
        setLoading(false);
        return;
      }
      setMessage({
        message: "Successfully deleted Post!",
        severity: "success",
      });
      setOpen(true);
      await new Promise((res) => setTimeout(res, 2000));
      navigate("/blog");
    } catch (error) {
      setMessage({ 
        message: "An error occurred while deleting the post", 
        severity: "error" 
      });
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const val = await firestore.getPost(id);
        if (val.code === 0) {
          setPost({ ...val.val.data(), id: val.val.id });
        } else {
          setMessage({ message: val.val.message, severity: "error" });
          setOpen(true);
        }
      } catch (error) {
        setMessage({ 
          message: "Failed to fetch post", 
          severity: "error" 
        });
        setOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress size={100} className="text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>{post.title}</title>
        <meta
          name="description"
          content={
            post.content.length > 60
              ? post.content.substring(0, 60) + "..."
              : post.content
          }
        />
        <meta
          name="keywords"
          content="blog, health, youth, sabrina, kitaka"
        />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Hero Image with Responsive and Contained Sizing */}
        <div className="w-full mb-8 flex justify-center items-center">
          <div className="max-w-full max-h-[70vh] overflow-hidden rounded-xl shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              onLoad={() => setImageLoaded(true)}
              className="w-full h-auto object-contain"
              style={{ 
                display: imageLoaded ? 'block' : 'none',
                maxWidth: '100%',
                maxHeight: '70vh',
              }}
            />
            {!imageLoaded && (
              <div className="flex justify-center items-center h-[50vh]">
                <CircularProgress size={50} className="text-primary" />
              </div>
            )}
          </div>
        </div>

        {/* Post Content */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          <p className="text-gray-600 mb-6">
            Last Updated: {new Date(post.timeStamp).toLocaleDateString()}
          </p>

          <div className="prose lg:prose-xl text-gray-800 mb-8">
            <pre className="whitespace-pre-wrap break-words text-base leading-relaxed">
              {post.content}
            </pre>
          </div>

          {/* Admin Actions */}
          {auth.currentUser && (
            <div className="flex space-x-4 mb-8">
              <Button 
                variant="outlined" 
                color="primary" 
                startIcon={<EditIcon />}
                onClick={() => navigate(`/blog/edit/${id}`)}
                className="hover:bg-blue-50 transition-colors"
              >
                Edit Post
              </Button>
              <Button 
                variant="outlined" 
                color="error" 
                startIcon={<DeleteIcon />}
                onClick={handleDialogOpen}
                className="hover:bg-red-50 transition-colors"
              >
                Delete Post
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="delete-post-dialog"
      >
        <DialogTitle className="text-lg font-semibold">
          Confirm Post Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you absolutely sure you want to delete this blog post? 
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
            onClick={handleDialogClose} 
            color="primary"
            className="hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button 
            onClick={deleteHandler} 
            color="error"
            className="hover:bg-red-50"
          >
            Confirm Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Notification Snackbar */}
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          className="w-full"
        >
          {message.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BlogPost;