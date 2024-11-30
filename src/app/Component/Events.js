// components/Hero.js
import Image from "next/image";
import Navbar from "./Navbar";

const Events = () => {
    return (
        <div className="relative bg-white    w-full h-screen bg-cover text-white text-center p-12 flex flex-col md:flex-row items-center justify-between"
 >
            <Navbar/>
            
<img src="https://251communications.com/static/media/ET_car_expo.665c2704900e256b7643.png" alt="Events" className="absolute top-20 left-0 w-full h-full object-cover" />
        </div>
    );
};

export default Events;
