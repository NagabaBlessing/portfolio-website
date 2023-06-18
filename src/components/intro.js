import { CssBaseline, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"
import * as React from "react";




export default function Intro() {
 return (
    <div>
    <div className="lg:flex hidden">
    <Grid container height={"100vh"} component="main">
        <CssBaseline />
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className="ms-4 mb-50 flex-1">
            <h5 className="text-red-500 tracking-widest text-lg font-bold my-4">
            
              UGANDAN PAEDIATRICIAN
        
              </h5>
            <h4 className="text-grey-800 tracking-widest text-xl font-italic font-bold my-4">Department of Paediatrics and Child health Makerere University</h4>
            <h1 className="text-8xl my-4">Dr.Sabrina Bakeera Kitaka</h1>
            <p className="text-gray-500 text-xl md:text-4xl mt-12 my-4">
           
            Dr. Sabrina Bakeera Kitaka is the author of Real Pursuit of Excellence,she is a mentor and life coach.
        
              </p>
            <Link to="/projects">
            <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ">Projects</button>          
            </Link>&nbsp;
            <a href="https://ug.linkedin.com/in/sabrina-kitaka-575b4b6a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">
            <button className="border-2 border-black-500 text-black rounded py-2 px-4">LinkedIn</button>
            </a>
        </div>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: "url(./images/home.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </div>
    <div className="lg:hidden">
        <div className="h-[40rem] w-auto" style={{ backgroundImage:"url(/images/home.jpeg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "multiply"}}>
        </div>
        <div className="ms-4 mb-50">
        <h5 className="text-red-500 tracking-widest text-lg font-bold my-4">UGANDAN PAEDIATRICIAN</h5>
            <h4 className="text-grey-800 tracking-widest text-xl font-bold my-4">Department of Paediatrics and Child health Makerere University</h4>
            <h1 className="text-7xl my-4">Dr.Sabrina Bakeera Kitaka</h1>
            <p className="text-gray-500 text-xl md:text-4xl my-4">Dr. Sabrina Bakeera Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
            <Link to="/projects">
            <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ">Projects</button>          
            </Link>&nbsp;
            <a href="https://ug.linkedin.com/in/sabrina-kitaka-575b4b6a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">
            <button className="border-2 border-black-500 text-black rounded py-2 mb-12 px-4">LinkedIn</button>
            </a>
        </div>
    </div>
    </div>
 )
}
