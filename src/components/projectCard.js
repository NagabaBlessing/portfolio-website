import React from 'react'

export default function ProjectCard({position, image}) {
  return (
    <div className="flex h-150 justify-center">
    <div className="w-158 h-96 bg-white border border-gray-200 mt-5 rounded-3xl shadow grid grid-cols-2 gap-0">
        {
           position === "left" ? 
           <>
            <div className="m-0 p-0">
                <h1>{image}</h1>
                <p>fhdngfngfngfnfgngfngfngnfgnfgnfgncncfngfngfngfngngn</p>
            </div>
            <div className="m-10">
                <h1 className="text-4xl my-6 font-bold">Project Name</h1>
                <p className="text-gray-500 my-3">fhdngfngfngfnfgngfngfngfngfngfngngn</p>
                <button className="border-2 border-black text-black rounded-3xl  py-2 px-4">View Project</button>
            </div>
           </>
           :
            <>
            <div className="m-10">
                <h1 className="text-4xl my-6 font-bold">Project Name</h1>
                <p className="text-gray-500 my-3">fhdngfngfngfnfgngfngfngfngfngfngngn</p>
                <button className="border-2 border-black text-black rounded-3xl  py-2 px-4">View Project</button>
            </div>
            <div className="m-0 p-0">
                <h1>{image}</h1>
                <p>fhdngfngfngfnfgngfngfngnfgnfgnfgncncfngfngfngfngngn</p>
            </div>
            </>
        }
      </div>
  </div>
  )
}
