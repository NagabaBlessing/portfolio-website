import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Auth from "../../Firebase/Authentication";

function Login() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState();
  const [message, setMessage] = useState({ message: null, severity: null });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const auth = new Auth();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);
    await auth
      .signIn(form.get("email"), form.get("password"))
      .then(async (val) => {
        if (val.code == 0) {
          setMessage({
            message: "Successfully Logged In!",
            severity: "success",
          });
          setOpen(true);
          await new Promise((res) => setTimeout(res, 2000));
          window.location.href = "/blog";
        } else {
          setMessage({ message: val.val.message, severity: "error" });
          setOpen(true);
        }
      });

    setLoading(false);
  };

  return (
    <div className="flex justify-center place-items-center h-[90vh]">
      <Card>
        <CardContent>
          <Typography align="center" variant="h4">
            Admin Sign
          </Typography>
          <Box
            component="form"
            noValidate={false}
            onSubmit={submitHandler}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="password"
            />
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Loading..." : "Sign In"}
            </Button>
          </Box>
        </CardContent>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={message.severity}
            sx={{ width: "100%" }}
          >
            {message.message}
          </Alert>
        </Snackbar>
      </Card>
    </div>
  );
}

export default Login;
