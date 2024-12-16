import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { 
  Alert,
  CircularProgress, 
  Typography
} from "@mui/material";
import FireStore from "../../Firebase/Firestore";
import BlogCard from "../../components/BlogCard";
import BlogNavbar from "./BlogNavbar";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const firestore = useMemo(() => new FireStore(), []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await firestore.getPosts();
        
        if (result.code === 0) {
          const formattedPosts = result.val.docs.map((post) => ({
            ...post.data(),
            id: post.id
          }));
          
          setPosts(formattedPosts);
          setFilteredPosts(formattedPosts);
        } else {
          setError(result.val.message);
        }
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [firestore]);

  // Search handler
  const handleSearch = (searchTerm) => {
    const lowercasedTerm = searchTerm.toLowerCase().trim();
    
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(lowercasedTerm) || 
      post.content.toLowerCase().includes(lowercasedTerm)
    );
    
    setFilteredPosts(filtered);
  };

  // Memoized sorting to prevent unnecessary re-renders
  const sortedPosts = useMemo(() => 
    [...filteredPosts].sort((a, b) => b.timeStamp - a.timeStamp), 
    [filteredPosts]
  );

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert severity="error" className="mt-4">
          {error}
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dr. Sabrina Kitaka | Blog</title>
        <meta name="description" content="Insightful blog posts by Dr. Sabrina Kitaka" />
        <meta name="keywords" content="blog, health, youth, sabrina, kitaka, medical insights" />
      </Helmet>
      
      <BlogNavbar onSearch={handleSearch} />
      
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-[70vh]">
            <CircularProgress size={80} color="primary" />
          </div>
        ) : (
          <>
            {sortedPosts.length === 0 ? (
              <Typography 
                variant="h6" 
                color="textSecondary" 
                className="text-center mt-4 text-gray-600"
              >
                No blog posts found
              </Typography>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="w-full transition-transform duration-300 hover:scale-105"
                  >
                    <BlogCard
                      title={post.title}
                      body={post.content}
                      timeStamp={post.timeStamp}
                      id={post.id}
                      image={post.image} // Pass the image
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Blog;