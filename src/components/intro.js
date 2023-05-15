import React from "react"


export default function Intro() {
 return (
    <div className="grid md:grid-cols-2 gap-3">
        <div className="ms-4">
            <h6 className="text-red-500 tracking-widest text-lg font-bold my-4">UGANDAN PHYSICIAN</h6>
            <h1 className="text-8xl my-4">Hello, my name<br/> is Sabrina<br/> Kitaka</h1>
            <p className="text-gray-500 text-4xl my-4">Sabrina Kitaka is an author of The Real Persuit of Excellence. Her autobiography and also a life coach and mentor.</p>
        <button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded ">Projects</button>&nbsp;
        <button className="border-2 border-black-500 text-black rounded py-2 px-4">LinkedIn</button>
        </div>
        <div>
        </div>
    </div>
 )
}