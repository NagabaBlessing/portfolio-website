import React from "react"


export default function AboutMe() {
    const bottomImage = {
        position: "fixed",
        bottom: "0px"
    }

    const aboutImage = {
        borderRadius: "30%"
    }

 return (
    <>
    <div className="min-h-[50rem] md:block hidden">
    <div className="grid md:grid-cols-2 gap-2">
        <div className="ms-4">
            <h1 className="md:text-8xl text-6xl my-4">About me</h1>
            <p className="text-gray-500 text-3xl my-4">Sabrina Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
        </div>
        <div style={{textAlign:"center", marginBottom:"50px"}}>
            <img style={aboutImage} class="h-full md:min-w-[35rem]" src="../images/abtme.jpeg" alt="image description"/>
        </div>
    </div>
    <div style={bottomImage} className="bg-red-500 w-screen h-20 text-transparent object-bottom">
        </div>
    </div>
    <div className="min-h-[50rem] md:hidden block">
    <div className="grid md:grid-cols-2 gap-2">
    <div style={{textAlign:"center", marginBottom:"50px"}}>
            <img style={aboutImage} class="h-full md:min-w-[35rem]" src="../images/abtme.jpeg" alt="image description"/>
        </div>
        <div className="ms-4">
            <h1 className="md:text-8xl text-6xl my-4">About me</h1>
            <p className="text-gray-500 text-3xl my-4">Sabrina Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
        </div>
    </div>
    <div style={bottomImage} className="bg-red-500 w-screen h-20 text-transparent object-bottom">
        </div>
    </div>
    </>
 )
}