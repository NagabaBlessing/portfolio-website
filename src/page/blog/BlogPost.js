import React, { useEffect, useState } from "react";
import FireStore from "../../Firebase/Firestore";
import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseConfig";
import { Delete, Edit } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BlogPost() {
  const { id } = useParams();
  const firestore = new FireStore();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [open, setOpen] = useState();
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
    await firestore.deletePost(post.id).then(async (val) => {
      if (val.code == 1) {
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
      window.location.href = "/blog";
      setLoading(false);
    });
  };
  useEffect(() => {
    (async () => {
      await firestore.getPost(id).then((val) => {
        if (val.code == 0) {
          setPost({ ...val.val.data(), id: val.val.id });
          setLoading(false);
        } else {
          setMessage({ message: val.val.message, severity: "error" });
          setOpen(true);
          setLoading(false);
        }
      });
    })();
  }, []);
  return (
    <div className="min-h-screen">
      {loading ? (
        post && (
          <div className="flex justify-center place-items-center mt-20">
            <CircularProgress size={100} />
          </div>
        )
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <div className="flex justify-center place-items-center md:mt-10">
              <div
                className="h-[45vh] w-[80vw]"
                style={{
                  backgroundImage: `url(${post.image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </Grid>
          <Grid item marginLeft={{ md: 25, xs: 5 }} marginTop={5} xs={12}>
            <Typography variant={"h2"} sx={{ fontSize: "35px" }}>
              {post.title}
            </Typography>
          </Grid>
          <Grid item marginLeft={{ md: 26, xs: 5 }} xs={12}>
            <Typography
              variant="small"
              component="small"
              color="text.secondary"
            >
              Last Updated {new Date(post.timeStamp).toUTCString()}
            </Typography>
            <Typography
              sx={{
                marginY: 3,
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
              component="pre"
            >
              {post.content}
            </Typography>
            {auth.currentUser !== null ? (
              <div>
                <Button
                  onClick={() => navigate("/blog/edit/" + id)}
                  sx={{ marginBottom: "20px" }}
                  variant="outlined"
                  size="small"
                >
                  <Edit /> Edit
                </Button>
                <Button
                  onClick={() => handleDialogOpen()}
                  variant="outlined"
                  sx={{ marginLeft: "20px", marginBottom: "20px" }}
                  color="error"
                  size="small"
                >
                  <Delete /> Delete
                </Button>
              </div>
            ) : null}
          </Grid>
        </Grid>
      )}
      <Dialog
        open={dialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Confirm to delete post?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure you want to delete this blog post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={deleteHandler}>
            Yes
          </Button>
          <Button onClick={handleDialogClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={message.severity}
          sx={{ width: "100%" }}
        >
          {message.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BlogPost;
