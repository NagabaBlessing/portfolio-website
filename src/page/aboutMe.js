import React from "react"


export default function AboutMe() {
    const bottomImage = {
        position: "fixed",
        bottom: "0px"
    }

    const aboutImage = {

    }

 return (
    <>
    <div className="min-h-[100rem] lg:block hidden place-items-center">
    <div className="flex justify-center">
        <h1 className="text-3xl mt-12 font-bold text-black tracking-wide">About Me</h1>
    </div>
    <div className="flex justify-center mb-6">
       <div className="bg-red-500 w-20 h-1 mb-12 rounded mt-2"></div>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-2 m-12">
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
  <div className="ms-4">
            
            <p className="text-gray-500 lg:text-3xl text-md my-4">
            Dr. Sabrina Bakeera-Kitaka is a Specialist Paediatrician and Senior Lecturer at the Department of Paediatrics and Child Health at Makerere University College of Health Sciences in Uganda. She obtained her MBChB degree in 1995 and her Masters of Paediatrics and Child Health in July 2002, both from Makerere University.
            </p><br/>
            <p className="text-gray-500 lg:text-3xl text-md my-4">
            From 2003 to 2011, Dr. Bakeera-Kitaka was a Gilead Fellow and Research Scholar at the Infectious Diseases Institute, where she pursued a Fellowship in Paediatric Infectious Diseases and conducted research on HIV-infected adolescents. In 2020, she earned her PhD from the School of Biomedical Sciences at the University of Antwerp in Belgium.
            </p>
        </div>
  </div>
</div>
<div className="h-48 lg:h-auto lg:w-75 w-100 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('./images/abtme.jpeg')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundBlendMode: "multiply"}} title="About me">
  </div>
    </div>
    <div className="grid lg:grid-cols-2 gap-2">
    <div className="h-48 lg:h-auto lg:w-75 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: "url('./images/abtme2.jpg')",backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundBlendMode: "multiply"}} title="About me">
  </div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
  <div className="ms-4 mt-10">
            <p className="text-gray-500 lg:text-3xl text-md my-4">
            Dr. Bakeera-Kitaka is actively involved in conducting basic research on various paediatric infectious diseases. She also provides clinical care to children and adolescents infected with HIV, many of whom acquired the infection during the perinatal period. She is the director of the Adolescent Health training program at Makerere University College of Health Sciences and serves as the Founder President of the Society of Adolescent Health in Uganda (www.sahu.ug).
            </p>
            <p className="text-gray-500 lg:text-3xl my-4">
            Additionally, Dr. Bakeera-Kitaka is an active member of the African Paediatric Society of Infectious Diseases (AFSPID). She currently serves as the vice chair of the Grants Management Committee for the Research and Innovation Fund of Makerere University for the period of 2022 to 2025. She is a Fellow of the Prestigious Uganda National Academy of Sciences since October 2019 and participates in various committees and boards.
            </p>
            <p className="text-gray-500 lg:text-3xl my-4">
            Dr. Bakeera-Kitaka's ultimate goal is to ensure that every child and adolescent has the opportunity to grow and reach their fullest potential.
            </p>
        </div>
  </div>
</div>
    </div>
    </div>
    <div className="min-h-[150rem] lg:hidden block">
    <div className="flex justify-center">
        <h1 className="text-3xl mt-12 font-bold text-black tracking-wide">About Me</h1>
    </div>
    <div className="flex justify-center mb-12">
       <div className="bg-red-500 w-20 h-1 rounded mt-2"></div>
    </div>
    
    <div>
        <div className="flex justify-center items-center">
            <img style={aboutImage} class="img-fluid h-auto w-[90vw]" src="../images/abtme.jpeg" alt="image description"/>
        </div>
            <p className="text-gray-500 text-2xl my-4">
            Dr. Sabrina Bakeera-Kitaka is a Specialist Paediatrician and Senior Lecturer at the Department of Paediatrics and Child Health at Makerere University College of Health Sciences in Uganda. She obtained her MBChB degree in 1995 and her Masters of Paediatrics and Child Health in July 2002, both from Makerere University.
            </p><br/>
            <p className="text-gray-500 text-2xl my-4">
            From 2003 to 2011, Dr. Bakeera-Kitaka was a Gilead Fellow and Research Scholar at the Infectious Diseases Institute, where she pursued a Fellowship in Paediatric Infectious Diseases and conducted research on HIV-infected adolescents. In 2020, she earned her PhD from the School of Biomedical Sciences at the University of Antwerp in Belgium.
            </p>
        </div>
    <div>
    <div>
            <img style={aboutImage} class="h-auto lg:min-w-[15rem]" src="../images/abtme2.jpg" alt="image description"/>
        </div>
        <div className="ms-4 mt-10">
            <p className="text-gray-500 text-2xl my-4">
            Dr. Bakeera-Kitaka is actively involved in conducting basic research on various paediatric infectious diseases. She also provides clinical care to children and adolescents infected with HIV, many of whom acquired the infection during the perinatal period. She is the director of the Adolescent Health training program at Makerere University College of Health Sciences and serves as the Founder President of the Society of Adolescent Health in Uganda (www.sahu.ug).
            </p>
            <p className="text-gray-500 text-2xl my-4">
            Additionally, Dr. Bakeera-Kitaka is an active member of the African Paediatric Society of Infectious Diseases (AFSPID). She currently serves as the vice chair of the Grants Management Committee for the Research and Innovation Fund of Makerere University for the period of 2022 to 2025. She is a Fellow of the Prestigious Uganda National Academy of Sciences since October 2019 and participates in various committees and boards.
            </p>
            <p className="text-gray-500 text-2xl my-4">
            Dr. Bakeera-Kitaka's ultimate goal is to ensure that every child and adolescent has the opportunity to grow and reach their fullest potential.
            </p>
        </div>
    </div>
    </div>
    </>
 )
}