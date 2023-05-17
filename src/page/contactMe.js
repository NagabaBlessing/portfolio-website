import React from "react";

export default function ContactMe() {
    return (
    <>
    <div className="flex justify-center">
        <h1 className="text-3xl font-bold tracking-wide">Projects</h1>
    </div>
    <div className="flex justify-center">
       <div className="bg-red-500 w-16 h-1 rounded mt-2">

       </div>
    </div>
    
<form>
    <div className="mb-6">
        <div>
            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
    </div>
    <div>
        <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div> 
    </div>

    
<label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>

    
    
    
</form>

<button className="bg-red-500 hover:bg-red-700 py-2 px-4 rounded mt-4">Send</button>&nbsp;

   

    </>
    )
}
