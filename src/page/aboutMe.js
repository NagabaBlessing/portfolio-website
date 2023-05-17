import React from "react"


export default function AboutMe() {
    const bottomImage = {
        position: "absolute",
        bottom: "0px"
    }

 return (
    <div className="grid md:grid-cols-2 gap-3">
        <div className="ms-4">
            
            <h1 className="text-8xl my-4">About me</h1>
            <p className="text-gray-500 text-4xl my-4">Sabrina Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
        <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ">Resume</button>&nbsp;
        
        </div>
        <div>
        </div>
        <div style={bottomImage} className="bg-yellow-500 w-screen h-20 text-transparent object-bottom">
        
        </div>
    </div>

    
 )
}