import Image from "next/image";
import HomePage from "./Component/HomePage.js";
import './globals.css';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white   relative bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(./web5.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}  >
 <HomePage/>
    </main>
  );
}
