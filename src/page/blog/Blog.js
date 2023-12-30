import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import FireStore from "../../Firebase/Firestore";
import BlogCard from "../../components/BlogCard";
import BlogNavbar from "./BlogNavbar";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Blog</title>
        <meta name="description" content="Blog Posts by Dr. Sabrina Kitaka" />
        <meta name="keywords" content="blog, health, youth, sabrina, kitaka" />
      </Helmet>
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
