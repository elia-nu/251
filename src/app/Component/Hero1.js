// components/Hero.js
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-600 w-full min-h-screen  bg-contain   text-white text-center p-12 flex flex-col-reverse lg:flex-row items-center justify-between "
        style={{backgroundImage: 'url(./h.jpg) '}}  >
          
           
            <div className="space-y-6 p-6 w-full flex flex-col justify-center items-center text-teal-800 md:w-1/2">
                <Image src="/gologo.png" alt="Generation Prompt" className="h-48 w-48 rounde bg-white rounded-xl r mb-4"/>
                <h1 className="text-5xl font-bold mb-4 text-teal-800 animate-pulse">Your Ride, On Demand</h1>
                <p className="text-xl">Affordable trips with options to share. Experience the journey with others!</p>
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300">
                    Book a Ride
                </button>
                <p className="text-lg">Discover more features and benefits!</p>
           
                <div className="flex justify-center items-center gap-4 mt-4">
                    
                </div>
            </div>
            <Image src="/Ca1.png" alt="Generation" width={1200} height={900} />
           

        </div>
    );
};

export default Hero;
