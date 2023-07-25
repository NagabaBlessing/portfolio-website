import { Alert, Avatar, Box, Grid, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Storage from "../../Firebase/Storage";
import uniqid from "uniqid";
import FireStore from "../../Firebase/Firestore";
function CreatePost() {
  const [image, setImage] = useState(null);
  const [imageBuffer, setImageBuffer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState();
  const [message, setMessage] = useState({ message: null, severity: null });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const db = new Storage();
  const firestore = new FireStore();
  let postId = uniqid();

  const imageHandler = (e) => {
    let reader = new FileReader();
    reader.readAsArrayBuffer(e.target.files[0]);
    reader.onload = () => {
      setImageBuffer(reader.result);
    };
    reader.onerror = () => {
      alert(reader.error);
    };
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    let imagelink = "";

    if (imageBuffer != null) {
      imagelink = await db.getFileUrl(postId, imageBuffer);
      if (imagelink.code === 1) {
        setMessage({ message: imagelink.val.message, severity: "error" });
        setOpen(true);
        setLoading(false);
        return;
      }
      imagelink = imagelink.val;
    } else {
      setMessage({ message: "No image inserted!", severity: "error" });
      setOpen(true);
      setLoading(false);
      return;
    }

    await firestore
      .createPost(
        form.get("postTitle"),
        imagelink,
        form.get("postContent"),
        postId,
      )
      .then(async (val) => {
        if (val.code == 0) {
          setMessage({
            message: "Successfully added post!",
            severity: "success",
          });
          setOpen(true);
          await new Promise((res) => setTimeout(res, 2000));
          setLoading(false);
          window.location.href = "/blog";
        } else {
          setMessage({
            message: `Failed to create post!: ${val.val}`,
            severity: "error",
          });
          setOpen(true);
          setLoading(false);
        }
      });
  };

  return (
    <div>
      <Card
        sx={{
          minWidth: 275,
          marginY: "20px",
          marginX: { md: "200px", xs: "20px" },
        }}
      >
        <Box
          component="form"
          onSubmit={submitHandler}
          noValidate={true}
          sx={{ mt: 3 }}
        >
          <CardContent>
            <Grid item xs={12}>
              <label
                for="postTitle"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Post Title
              </label>
              <TextField
                name="postTitle"
                required
                fullWidth
                id="postTitle"
                label="Post Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <label
                for="dropzone-file"
                className="block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white w-full"
              >
                Cover Image
              </label>
              {image != null ? (
                <div className="flex justify-center mb-5">
                  <Box
                    component="img"
                    sx={{
                      height: 400,
                      width: "auto",
                    }}
                    alt="The house from the offer."
                    src={image}
                  />
                </div>
              ) : (
                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop Company Logo.
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        JPEG, PNG, or JPG
                      </p>
                    </div>
                  </label>
                </div>
              )}
              <input
                required
                onChange={imageHandler}
                id="dropzone-file"
                type="file"
                accept=".jpeg, .png, .jpg"
                class="block my-5 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              />
            </Grid>
            <Grid item xs={12}>
              <label
                for="postContent"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Post Content
              </label>
              <TextField
                required
                multiline
                fullWidth
                rows={15}
                maxRows={30}
                id="postContent"
                label="Post Content"
                name="postContent"
              />
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              disabled={loading}
              variant="contained"
              size="small"
            >
              {loading ? "Creating Post..." : "Submit"}
            </Button>
          </CardActions>
        </Box>
      </Card>
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

export default CreatePost;
