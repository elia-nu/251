import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
const Contact= () => {
    return (
        <div className="bg-white py-20 flex flex-col justify-center items-center">
            <h1 className='text-center d4 font-bold text-teal-600 text-5xl py-5'> Get In Touch With Us</h1>  

            <div className='  container shadow-2xl border h-fit py-12 lg:divide-x divide-teal-800 my-5 rounded-2xl flex flex-col md:flex-row justify-around text-5xl text-teal-700 w-full md:w-[65%]'>
        
                <div className=' py-2  flex flex-col justify-center items-center'>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <div className='flex flex-col gap-2 items-center text-lg text-gray-700 pt-4'>
                        <h1 className='font-bold'> Location </h1>
                        <h3 className='font-thin text-xs'> Addis Abeba </h3>
                    </div>
                </div>

                <div className='  py-2 flex flex-col justify-center items-center lg:pl-40'>
                    <FontAwesomeIcon icon={faPhone} />
                    <div className='flex flex-col gap-2 items-center text-lg text-gray-700 pt-4'>
                        <h1 className='font-bold'> Call Us</h1>
                        <h3 className='font-thin text-xs'> +251098765432 </h3>
                    </div>
                </div>

                <div className=' py-2 flex flex-col justify-center items-center lg:pl-32'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className='flex flex-col gap-2 items-center text-lg text-gray-700 pt-4'>
                        <h1 className='font-bold'> Email Us</h1>
                        <h3 className='font-thin text-xs'> Info@Gotrip.com </h3>
                    </div>
                </div>
            </div>
   
            <div className='flex flex-col lg:flex-row w-full px-4 md:px-40 my-10'>
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <Image src="/admin-bro.png" alt="Generation Prompt" className="h-full w-full lg:w-[30rem] xl:w-[50rem]  bg-white rounded-xl mb-4" width={500} height={300} />
                </div>
   
                <div className='w-full lg:w-1/2'>
                    <form className="flex flex-col w-full mx-4  max-w-full xl:max-w-[60%] bg-white rounded-2xl shadow-2xl p-6 h-full justify-around ">
                        <h1 className='text-center text-2xl text-teal-800 font-semibold py-4'> Contact form</h1>
                        <label htmlFor="name" className="text-lg text-teal-600 font-bold mb-2 mx-4">Name</label>
                        <input type="text" id="name" name="name" placeholder='Name' className="border bg-white border-teal-600 px-4 py-4 p-2 rounded mb-4 mx-4" />

                        <label htmlFor="email" className="text-lg text-teal-600 font-bold mb-2 mx-4">Email</label>
                        <input type="email" id="email" name="email" placeholder='Email' className="border bg-white border-teal-600 py-4 p-2 rounded mb-4 mx-4 px-4" />

                        <label htmlFor="message" className="text-lg text-teal-600 font-bold mb-2 mx-4">Message</label>
                        <textarea id="message" name="message" rows="10" placeholder='Message' className="border border-teal-600 p-2 rounded mb-4 bg-white mx-4 px-4"></textarea>

                        <button type="submit" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
