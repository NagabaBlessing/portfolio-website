import React from "react"
import { Link } from "react-router-dom"


export default function Intro() {
 return (
    <div className="grid md:grid-cols-2 gap-3">
        <div className="ms-4">
            <h6 className="text-red-500 tracking-widest text-lg font-bold my-4">UGANDAN PHYSICIAN</h6>
            <h1 className="text-8xl my-4">Hello, my name<br/> is Sabrina<br/> Kitaka</h1>
            <p className="text-gray-500 text-4xl my-4">Sabrina Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
            <Link to="/projects">
            <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ">Projects</button>          
            </Link>&nbsp;
            <a href="https://ug.linkedin.com/in/sabrina-kitaka-575b4b6a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank">
            <button className="border-2 border-black-500 text-black rounded py-2 px-4">LinkedIn</button>
            </a>
        </div>
        <div className="h-screen w-auto" style={{backgroundPositionY:"20px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundBlendMode: "multiply"}}>
        
<img class="h-auto max-w-full" src="../images/home.jpeg" alt="image description"/>

        </div>
    </div>
 )
}