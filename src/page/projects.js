import ProjectCard from "../components/projectCard";


export default function Projects() {
    return (
    <>
    <div className="flex justify-center">
        <h1 className="text-3xl font-bold mt-12 tracking-wide">Projects</h1>
    </div>
    <div className="flex justify-center">
       <div className="bg-red-500 w-16 h-1 rounded mt-2">

       </div>
    </div>
   <ProjectCard image="/images/clinic.jpeg" projectName="Friday Adolecent Clinic" description="Co Founding Director of the Friday Adolescent Health Clinic at Makerere University College of Health Sciences and Mulago Hospital.The Clinic was opened in May 2013 to cater for the general health care of adolescents and to train pre service and service providers in adolescent health care" position="left"/>
   <ProjectCard image="/images/book.jpeg" projectName="Real Pursuit of Excellence" description="Sabrina Kitaka is a multifaceted individual who has made significant contributions as both an author and a life coach and mentor. She is widely recognized for her compelling autobiography titled 'The Real Pursuit of Excellence,' which offers readers a deep and introspective journey into her own life experiences and the valuable lessons she has learned along the way.In her autobiography, Kitaka fearlessly delves into her personal struggles, triumphs, and the challenges she faced on her path to success. She shares intimate details about her upbringing, education, career choices, and the pivotal moments that shaped her into the person she is today. Through her honest and heartfelt storytelling, Kitaka inspires readers to reflect on their own lives and embrace the pursuit of excellence in every aspect."/>
    <ProjectCard image="/images/sahu.jpeg" projectName="Society of Adolescent Health Uganda(SAHU)" description="Founding President of the Society of Adolescent Health in Uganda www.sahu.ug allows for sharing of best practices and training health care professionals in the workplace and and home"/>
    </>
    )
}