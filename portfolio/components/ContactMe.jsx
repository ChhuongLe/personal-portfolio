import React from 'react';
import { UserIcon, BriefcaseIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";


export default function ContactMe() {
  const { register, handleSubmit} = useForm();
  const onSubmit = (formData) => {
    window.location.href= `mailto:chhuongle@gmail.com?subject=${formData.Subject}&body=Hi, my name is ${formData.Name}. ${formData.Message} from ${formData.Email}`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl semi-bold text-center">
          Like what you see?{" "}<span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">chhuongcle@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <UserIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">https://www.linkedin.com/in/chhuongle</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <BriefcaseIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
            <p className="text-2xl">https://github.com/chhuongle</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('Name')} placeholder="Name" className="contactInput" type="text"/>
            <input {...register('Email')} placeholder="Email" className="contactInput" type="email"/>
          </div>
          <input {...register('Subject')} placeholder="Subject" className="contactInput" type="text" />
          <textarea {...register('Message')} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-2xl">Submit</button>
        </form>
      </div>
    </div>
  )
}