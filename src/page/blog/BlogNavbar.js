import React, { useState } from "react";
import { 
  Create, 
  Login, 
  Logout, 
  Search as SearchIcon 
} from "@mui/icons-material";
import { 
  Button, 
  TextField, 
  InputAdornment, 
  Box, 
  AppBar, 
  Toolbar, 
  Container 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../Firebase/Authentication";
import Cookies from "universal-cookie";

function BlogNavbar({ onSearch }) {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [searchTerm, setSearchTerm] = useState("");

  const logOutHandler = async () => {
    await new Auth().logOut();
    cookie.remove("login");
    navigate("/login");
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0}
      sx={{ 
        backgroundColor: '#f4f6f9', 
        borderBottom: '1px solid rgba(0,0,0,0.12)' 
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          disableGutters 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            py: 1 
          }}
        >
          {/* Search Bar */}
          <Box 
            sx={{ 
              flexGrow: 1, 
              maxWidth: 400, 
              mr: 2 
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={handleSearchChange}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="disabled" />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 20,
                  backgroundColor: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0,0,0,0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  }
                }
              }}
            />
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {cookie.get("login") === "true" ? (
              <>
                <Button
                  variant="text"
                  startIcon={<Create />}
                  onClick={() => navigate("/create-post")}
                  sx={{ 
                    mr: 1,
                    color: "text.secondary",
                    "&:hover": { 
                      backgroundColor: "rgba(0,0,0,0.04)",
                      color: "text.primary" 
                    } 
                  }}
                >
                  Create Post
                </Button>
                <Button
                  variant="text"
                  startIcon={<Logout />}
                  onClick={logOutHandler}
                  sx={{ 
                    color: "text.secondary",
                    "&:hover": { 
                      backgroundColor: "rgba(0,0,0,0.04)",
                      color: "text.primary" 
                    } 
                  }}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                startIcon={<Login />}
                onClick={() => navigate("/login")}
                color="primary"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default BlogNavbar;