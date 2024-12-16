import React from "react";
import { CssBaseline, Grid, Paper, Typography, Button, useMediaQuery, ThemeProvider, createTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const theme = createTheme(); // Create a default Material-UI theme

const Intro = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // Ensure the theme is available

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dr. Sabrina Kitaka</title>
        <meta name="description" content="Portfolio Site for Dr. Sabrina Kitaka." />
      </Helmet>
      <CssBaseline />
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

const DesktopLayout = () => (
  <Grid container component="main" sx={{ minHeight: "100vh" }}>
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      component={Paper}
      elevation={6}
      square
      sx={{ p: 4 }}
    >
      <IntroContent />
    </Grid>
    <Grid
      item
      xs={false}
      sm={4}
      md={6}
      sx={{
        backgroundImage: "url(./images/home.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    />
  </Grid>
);

const MobileLayout = () => (
  <div>
    <div
      style={{
        height: "40rem",
        backgroundImage: "url(/images/home.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    ></div>
    <Paper sx={{ p: 4 }}>
      <IntroContent />
    </Paper>
  </div>
);

const IntroContent = () => (
  <div>
    <Typography variant="h5" color="error" gutterBottom sx={{ fontWeight: "bold", letterSpacing: 1 }}>
      UGANDAN PAEDIATRICIAN
    </Typography>
    <Typography variant="h6" gutterBottom sx={{ fontStyle: "italic", fontWeight: "bold", letterSpacing: 1 }}>
      Department of Paediatrics and Child Health, Makerere University
    </Typography>
    <Typography
      variant="h2"
      gutterBottom
      sx={{ fontWeight: "bold", mt: 2, mb: 4 }}
    >
      Dr. Sabrina Bakeera Kitaka
    </Typography>
    <Typography
      variant="body1"
      sx={{ fontSize: { xs: "1.2rem", md: "2rem" }, color: "text.secondary", mb: 4 }}
    >
      Dr. Sabrina Bakeera Kitaka is the author of Real Pursuit of Excellence, a mentor, and a life coach.
    </Typography>
    <div>
      <Link to="/projects" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="error"
          sx={{ textTransform: "none", mr: 2 }}
        >
          Projects
        </Button>
      </Link>
      <Button
        variant="outlined"
        href="https://ug.linkedin.com/in/sabrina-kitaka-575b4b6a?original_referer=https%3A%2F%2Fwww.google.com%2F"
        target="_blank"
        sx={{ textTransform: "none" }}
        startIcon={<LinkedInIcon />}
      >
        LinkedIn
      </Button>
    </div>
  </div>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Intro />
  </ThemeProvider>
);

export default App;
