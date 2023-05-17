import React from "react"
import Intro from "../components/intro"

export default function Home() {
   const bottomImage = {
      position: "fixed",
      bottom: "0px"
  }
 return (
    <div className="min-h-[60rem]">
    <Intro/>
    <div style={bottomImage} className="bg-yellow-500 w-screen h-20">
    </div>
    </div>
 )
}