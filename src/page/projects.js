import ProjectCard from "../components/projectCard";
import clinic from "../images/clinic.jpeg"

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
   <ProjectCard image={clinic}/>
   <ProjectCard image="Image 2" position="left"/>
   <ProjectCard image="Image 3"/>

    </>
    )
}