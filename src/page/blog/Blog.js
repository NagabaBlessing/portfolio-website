import React, { useEffect, useState } from "react";
import BlogNavbar from "./BlogNavbar";
import BlogCard from "../../components/BlogCard";
import { CircularProgress, Grid, Typography } from "@mui/material";
import BlogSideCard from "../../components/BlogSideCard";
import FireStore from "../../Firebase/Firestore";

function Blog() {
  const [posts, setPosts] = useState([]);
  var tempPosts = [];
  const [loading, setLoading] = useState(true);
  const firestore = new FireStore();
  useEffect(() => {
    (async () => {
      await firestore.getPosts().then((val) => {
        if (val.code == 0) {
          val.val.forEach((post) => {
            tempPosts = [...tempPosts, { ...post.data(), id: post.id }];
          });
          setPosts(tempPosts);
          tempPosts = [];
          setLoading(false);
        } else {
          alert(val.val.message);
          setLoading(false);
        }
      });
    })();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <BlogNavbar />
      <Grid container gap={1}>
        <Grid item xs={12}>
          {loading ? (
            <div className="flex justify-center place-items-center mt-20">
              <CircularProgress size={100} />
            </div>
          ) : (
            posts
              .sort((a, b) => a.timeStamp < b.timeStamp)
              .map((post) => {
                return (
                  <BlogCard
                    title={post.title}
                    body={post.content}
                    timeStamp={post.timeStamp}
                    id={post.id}
                  />
                );
              })
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Blog;
