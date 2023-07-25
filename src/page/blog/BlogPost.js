import React, { useEffect, useState } from "react";
import FireStore from "../../Firebase/Firestore";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { auth } from "../../Firebase/FirebaseConfig";
import { Delete, Edit } from "@mui/icons-material";

function BlogPost() {
  const { id } = useParams();
  const firestore = new FireStore();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  useEffect(() => {
    (async () => {
      await firestore.getPost(id).then((val) => {
        if (val.code == 0) {
          setPost(val.val.data());
          setLoading(false);
        } else {
          alert(val.val.message);
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
            <Typography
              variant={"h2"}
              sx={{ fontSize: { md: "50px", xs: "40px" } }}
            >
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
            <Typography sx={{ marginY: 3 }} component="pre">
              {post.content}
            </Typography>
            {auth.currentUser !== null ? (
              <div>
                <Button
                  onClick={() => {}}
                  sx={{ marginBottom: "20px" }}
                  variant="outlined"
                  size="small"
                >
                  <Edit /> Edit
                </Button>
                <Button
                  onClick={() => {}}
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
    </div>
  );
}

export default BlogPost;
