import ProjectCard from "../components/projectCard";

export default function Projects() {
    return (
    <>
    <div className="flex justify-center">
        <h1 className="text-3xl font-bold tracking-wide">Projects</h1>
    </div>
    <div className="flex justify-center">
       <div className="bg-red-500 w-16 h-1 rounded mt-2">

       </div>
    </div>
   <ProjectCard image="Image 1"/>
   <ProjectCard image="Image 2" position="left"/>
   <ProjectCard image="Image 3"/>

    </>
    )
}