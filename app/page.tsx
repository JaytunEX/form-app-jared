'use client';
import React from 'react';

import Image from 'next/image'



export default function Home() {
  return (
    <div className="bg-grey-700">
      <h2 className="text-4xl font-semibold mb-4 text-black text-center">User Feedback Form</h2>

      <div className="flex flex-col justify-center items-center shadow-lg rounded-lg">
        
        <label htmlFor="name" className="text-black">Name:</label>
        <input type="text" id="name" name="name" required className="border border-black shadow text-black" onChange={handleNameChange} />


<br/>
        <label htmlFor="email" className="text-black">Email:</label>
        <input type="email" id="email" name="email" required className="border border-black shadow text-black" onChange={handleEmailChange} />

<br/>

        <label htmlFor="topic" className="text-black">Topic:</label>
        <select id="topic" name="topic" className="text-black border border-black" onChange={handleSelectChange}>
          <option value="bug" className="text-black">Bug Report</option>
          <option value="feature" className="text-black">Feature Request</option>
          <option value="other" className="text-black">Other</option>
        </select>
<br/>
        <label className="text-black"><input type="checkbox" name="subscribe" onChange={handleCheckbox} /> I want to recieve Updates</label>
<br/>
        <label htmlFor="message" className="text-black">Message:</label>
        <textarea
          id="message"
          name="message"
          className="border border-black shadow text-black"
          onChange={handleTextarea}
        />
<br/>
<form onSubmit={handleSubmit}>
    <div className="flex justify-center border border-black shadow rounded" style={{ width: 70, height: 30 }}>
      <button type="submit" className="text-black ">Submit</button>
    </div>
</form>
        <Image
  src="/images/logo.png"
  alt="Logo"
  width={128} 
  height={128}
  className="mb-4"
/>
      </div>


    </div>

               
  );
}


            const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Nombre:", event.target.value);
      };

      
            const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Email:", event.target.value);
      };

            const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
      };

            const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
      };

            const handleTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log(event.target.value);
      };

            const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulario enviado");
      };