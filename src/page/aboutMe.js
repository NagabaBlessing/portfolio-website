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
    <div className="min-h-[100rem] md:block hidden">
    <div className="grid md:grid-cols-2 gap-2">
        <div className="ms-4">
            <h1 className="md:text-8xl text-6xl my-4">About me</h1>
            <p className="text-gray-500 text-3xl my-4">
            Dr. Sabrina Bakeera-Kitaka is a Specialist Paediatrician and Senior Lecturer at the Department of Paediatrics and Child Health at Makerere University College of Health Sciences in Uganda. She obtained her MBChB degree in 1995 and her Masters of Paediatrics and Child Health in July 2002, both from Makerere University.
            </p><br/>
            <p className="text-gray-500 text-3xl my-4">
            From 2003 to 2011, Dr. Bakeera-Kitaka was a Gilead Fellow and Research Scholar at the Infectious Diseases Institute, where she pursued a Fellowship in Paediatric Infectious Diseases and conducted research on HIV-infected adolescents. In 2020, she earned her PhD from the School of Biomedical Sciences at the University of Antwerp in Belgium.
            </p>
        </div>
        <div style={{textAlign:"center", marginLeft:"50px"}}>
            <img style={aboutImage} class="h-auto md:min-w-[35rem]" src="../images/abtme.jpeg" alt="image description"/>
        </div>
    </div>
    <div className="grid md:grid-cols-2 gap-2">
    <div style={{textAlign:"center", marginLeft:"50px"}}>
            <img style={aboutImage} class="h-auto md:min-w-[15rem]" src="../images/abtme2.jpg" alt="image description"/>
        </div>
        <div className="ms-4 mt-10">
            <p className="text-gray-500 text-3xl my-4">
            Dr. Bakeera-Kitaka is actively involved in conducting basic research on various paediatric infectious diseases. She also provides clinical care to children and adolescents infected with HIV, many of whom acquired the infection during the perinatal period. She is the director of the Adolescent Health training program at Makerere University College of Health Sciences and serves as the Founder President of the Society of Adolescent Health in Uganda (www.sahu.ug).
            </p>
            <p className="text-gray-500 text-3xl my-4">
            Additionally, Dr. Bakeera-Kitaka is an active member of the African Paediatric Society of Infectious Diseases (AFSPID). She currently serves as the vice chair of the Grants Management Committee for the Research and Innovation Fund of Makerere University for the period of 2022 to 2025. She is a Fellow of the Prestigious Uganda National Academy of Sciences since October 2019 and participates in various committees and boards.
            </p>
            <p className="text-gray-500 text-3xl my-4">
            Dr. Bakeera-Kitaka's ultimate goal is to ensure that every child and adolescent has the opportunity to grow and reach their fullest potential.
            </p>
        </div>
    </div>
    </div>
    <div className="min-h-[150rem] md:hidden block">
    <div className="grid md:grid-cols-2 gap-2">
        <div className="ms-4">
        <div style={{textAlign:"center"}}>
            <img style={aboutImage} class="h-auto md:min-w-[35rem]" src="../images/abtme.jpeg" alt="image description"/>
        </div>
            <h1 className="md:text-8xl text-6xl my-4">About me</h1>
            <p className="text-gray-500 text-3xl my-4">
            Dr. Sabrina Bakeera-Kitaka is a Specialist Paediatrician and Senior Lecturer at the Department of Paediatrics and Child Health at Makerere University College of Health Sciences in Uganda. She obtained her MBChB degree in 1995 and her Masters of Paediatrics and Child Health in July 2002, both from Makerere University.
            </p><br/>
            <p className="text-gray-500 text-3xl my-4">
            From 2003 to 2011, Dr. Bakeera-Kitaka was a Gilead Fellow and Research Scholar at the Infectious Diseases Institute, where she pursued a Fellowship in Paediatric Infectious Diseases and conducted research on HIV-infected adolescents. In 2020, she earned her PhD from the School of Biomedical Sciences at the University of Antwerp in Belgium.
            </p>
        </div>
    </div>
    <div className="grid md:grid-cols-2 gap-2">
    <div style={{textAlign:"center"}}>
            <img style={aboutImage} class="h-auto md:min-w-[15rem]" src="../images/abtme2.jpg" alt="image description"/>
        </div>
        <div className="ms-4 mt-10">
            <p className="text-gray-500 text-3xl my-4">
            Dr. Bakeera-Kitaka is actively involved in conducting basic research on various paediatric infectious diseases. She also provides clinical care to children and adolescents infected with HIV, many of whom acquired the infection during the perinatal period. She is the director of the Adolescent Health training program at Makerere University College of Health Sciences and serves as the Founder President of the Society of Adolescent Health in Uganda (www.sahu.ug).
            </p>
            <p className="text-gray-500 text-3xl my-4">
            Additionally, Dr. Bakeera-Kitaka is an active member of the African Paediatric Society of Infectious Diseases (AFSPID). She currently serves as the vice chair of the Grants Management Committee for the Research and Innovation Fund of Makerere University for the period of 2022 to 2025. She is a Fellow of the Prestigious Uganda National Academy of Sciences since October 2019 and participates in various committees and boards.
            </p>
            <p className="text-gray-500 text-3xl my-4">
            Dr. Bakeera-Kitaka's ultimate goal is to ensure that every child and adolescent has the opportunity to grow and reach their fullest potential.
            </p>
        </div>
    </div>
    </div>
    </>
 )
}