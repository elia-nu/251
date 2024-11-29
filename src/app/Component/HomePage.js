import Image from "next/image";
import Hero from "./Hero";
import FeaturesSection from "./Features";
import Link from "next/link";

import Driver from "./Driver";
import Customer from "./Customer";
import About from "./About";
import Partner from "./Partner";
import Contac from "./Contac";
import Team from "./Team";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <div className=" w-full" style={{ backgroundImage: "url('/go.jpg')" }}>
      <div id="Home">
        <Hero />
      </div>

      <Partner />

      {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/vas.118f2cdcdb42e905084f.png"
            alt="VAS Services"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/Research.abdf476cc7724c6e4a9f.png"
            alt="Research"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/production.6c1119875f66cd34a32d.jpg"
            alt="Production"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/PR.3fc54baef9c1698fe188.jpg"
            alt="Public Relations"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/digital.c9bb6e058cf2b14c9dd3.jpg"
            alt="Digital"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src="https://251communications.com/static/media/Creatives.fb067fc0a3b38aecb671.png"
            alt="Creatives"
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>*/}
    </div>
  );
};

export default HomePage;
