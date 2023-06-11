import React, {useRef} from "react";
import emailjs from "emailjs-com";


export default function ContactMe() {

    const bottomImage = {
        position: "fixed",
        bottom: "0px"
    }

    const form = useRef();

    const sendEmail = (e) => {
        emailjs.sendForm(
            "service_w8g7rad",
            "template_fimhyxs",
            form.current,"3TYT9NXUcbGryjiXo"
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        )
    }
    return (
    <div className="min-h-[90vh]">
    <div className="flex justify-center">
        <h1 className="text-3xl mt-12 font-bold tracking-wide">Contact Me</h1>
    </div>
    <div className="flex justify-center">
       <div className="bg-red-500 w-20 h-1 rounded mt-2"></div>
    </div>
    
<form className="md:mx-96 mx-10 mt-20" ref={form} onSubmit={sendEmail}>
    <div className="mb-6">
        <div>
            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
            <input type="text" name="name" id="name" className="bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
    </div>
    <div>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
        <input type="hidden" name="receiver" value="sabrinakitaka@gmail.com"/> 
    </div>

    
<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Message</label>
<textarea id="message" name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea> 
<button type="submit" className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded mt-4">Send</button>
</form>

<div className="flex flex-grow md:ms-96 ms-10 mt-3">
    <a href="https://www.instagram.com/sabrina_kitaka/?hl=en" target="_blank" className="items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 me-2 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" viewBox="0 0 256 256" id="instagram-logo"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="32"></circle><path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"></path></svg>
    </a>
    <a  href="https://ug.linkedin.com/in/sabrina-kitaka-575b4b6a?original_referer=https%3A%2F%2Fwww.google.com%2F" target="_blank" class="items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 me-2  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg>
    </a>
    <a href="https://twitter.com/SabrinaKitaka" className="items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100" target="_blank">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10"
    fill="currentColor"
    style={{color: "black"}}
    viewBox="0 0 24 24">
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
</a>
<a href="mailto:sabrinakitaka@gmail.com" className="items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 " target="_blank">
<svg xmlns="http://www.w3.org/2000/svg"  className="ms-1 h-10 w-10"
    fill="currentColor"
    style={{color: "black"}} viewBox="0 0 128 96" id="email"><path d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"></path></svg>
</a>
</div>
    </div>
    )
}
