// components/Hero.js
import Image from "next/image";


const Hero = () => {
    return (
        <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-teal-600 w-full h-screen bg-cover text-white text-center p-12 flex flex-col md:flex-row items-center justify-between"
        style={{backgroundImage: 'url(./gohero.png) '}}  >
            
            <div className="space-y-6 p-6 w-full flex flex-col justify-center items-center md:w-1/2">
                <img src="/l2.png" alt="Generation Prompt" className="h-48 w-48 rounde bg-white rounded-xl r mb-4"/>
                <h1 className="text-5xl font-bold mb-4 animate-pulse">Your Ride, On Demand</h1>
                <p className="text-xl">Affordable trips with options to share. Experience the journey with others!</p>
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300">
                    Book a Ride
                </button>
                <p className="text-lg">Discover more features and benefits!</p>
                <div className="flex justify-center items-center gap-4 mt-4">
               s
                </div>
            </div>

            <div className="w-full md:w-1/2 h-96 flex items-end justify-end mt-96"> 
            <Image src="https://s3-alpha-sig.figma.com/img/dcb7/da8b/4660c2764296791c4ec5f17180fa46be?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-OL9z7ROXVs9MBVpZoY~THMkkdUsWM2x5b8Y-nM1BByLdoe5U2qBht7b2iPY76yd5PkiWlndZfKfwbNJljN4276IrWV~4ROc8pJajDnR2csMvnfh6~NBYNTZXBD7RAE1a~to4E8B60PDcbmV1HG-BG39THPai7IXCNb7qAdrZF~8tR-EYbeBHZ-0OiMU~xifzc47ilCGC2kqBKqRkBu6L6~zNAXcO-M46xg8S6QjqhZ3bEuh~Okqhe1acf-mHAt0df-K2gNb4Pu22XXTg9mnV9aY9IJk0dM1w6Bq3OMxB6eyuAGX3KCYOJ-~dqFfjxHROHei~bJptXkj3R8smz6mw__" className="h-[30rem]" alt="Logo" />
      
            </div>

        </div>
    );
};

export default Hero;
