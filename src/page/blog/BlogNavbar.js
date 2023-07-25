import { Create, Login, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Auth from "../../Firebase/Authentication";

function BlogNavbar() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  return (
    <div>
      <nav class="bg-gray-100 border-gray-200 mx-10 rounded-full shadow my-5">
        <div class="flex flex-wrap justify-between items-center max-w-screen-xl p-4">
          <div class="flex items-center">
            {cookie.get("login") == "true" ? (
              <>
                <Button
                  className="ms-3 me-3"
                  onClick={() => navigate("/create-post")}
                  sx={{ color: "darkgray", ":hover": { color: "black" } }}
                  to="#"
                >
                  <Create /> Create new post
                </Button>
                <Button
                  className="ms-3"
                  onClick={async () => await new Auth().logOut()}
                  sx={{ color: "darkgray", ":hover": { color: "black" } }}
                  to="#"
                >
                  <Logout /> Log out
                </Button>
              </>
            ) : (
              <Button
                className="ms-3"
                onClick={() => navigate("/login")}
                sx={{ color: "darkgray", ":hover": { color: "black" } }}
                to="#"
              >
                <Login /> &nbsp; Login
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BlogNavbar;
