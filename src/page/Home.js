import React from "react"
import Intro from "../components/intro"

export default function Home() {
   const bottomImage = {
      position: "fixed",
      bottom: "0px"
  }
 return (
    <div className="md:min-h-[60rem] min-h-[100rem]">
    <Intro/>
    <div style={bottomImage} className="bg-red-500 w-screen h-20">
    </div>
    </div>
 )
}