// components/Hero.js
import Image from "next/image";
import Navbar from "./Navbar";

const Events = () => {
    return (
        <div className="relative bg-white w-full min-h-screen bg-cover text-white flex flex-col">
            <Navbar/>
            
            <div className="w-full bg-red-50 px-4 md:px-12 py-16 md:py-24 flex flex-col items-center justify-center pt-40 md:pt-40">
                <h4 className="text-2xl md:text-4xl lg:text-5xl font-black font-sans text-black pb-6 md:pb-10 max-w-4xl text-center">
                    ET REAL ESTATE AND HOME EXPO <span className="font-normal">IS AROUND </span>THE CORNER
                </h4>
                <div className="max-w-4xl mx-auto">
                    <p className="text-xs md:text-sm lg:text-base text-black text-center leading-relaxed">
                        ORGANIZED ANNUALLY BY 251 COMMUNICATIONS AND MARKETING PLC, IS A PREMIER EVENT HELD EVERY DECEMBER
                        FOR THREE CONSECUTIVE DAYS. THIS YEAR MARKS THE 7TH EDITION OF THE EXPO, WHICH HAS SUCCESSFULLY SHOWCASED A DIVERSE RANGE OF REAL
                        ESTATE AND HOME-RELATED SERVICES. THE EVENT SERVES AS A VITAL PLATFORM FOR PROMOTING INNOVATIVE HOUSING SOLUTIONS, INVESTMENT
                        OPPORTUNITIES, AND SUSTAINABLE LIVING OPTIONS, CREATING A VIBRANT MARKETPLACE THAT BENEFITS BOTH EXHIBITORS AND ATTENDEES ALIKE.
                    </p>
                    <p className="text-xs md:text-sm lg:text-base text-black text-center leading-relaxed mt-6 md:mt-10">
                        WITH EACH ITERATION HELD EVERY DECEMBER FOR THREE DAYS, THE EXPO CONTINUES TO ELEVATE THE REAL ESTATE LANDSCAPE IN ETHIOPIA, MAKING IT A
                        MUST-ATTEND EVENT FOR ANYONE INTERESTED IN THE SECTOR.
                    </p>
                </div>
            </div>

            <div className="w-full bg-[#FFA200] px-4 md:px-12 py-8 md:py-12 flex flex-col items-center justify-center">
                <div className="max-w-4xl w-full">
                    <img 
                        src="/zz.jpeg" 
                        alt="Events" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Events;
