import Image from "next/image";
import Hero from "./Component/Hero";
import Hero1 from "./Component/Hero1";
import FeaturesSection from "./Component/Features";
import Link from 'next/link';

import Driver from "./Component/Driver";
import HomePage from "./Component/HomePage.js";
import About1 from "./Component/Work";
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white   relative bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(./web5.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}  >
 <HomePage/>
    </main>
  );
}
