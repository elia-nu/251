'use client'
import { motion, useScroll } from 'framer-motion';
import useInView from '../hooks/useInView';
import Image from 'next/image';
import Navbar from './Navbar';

const Services = () => {
    const { ref, inView } = useInView({ threshold: 0.1 });
    const { scrollY } = useScroll();

    return (
        <>
            <Navbar home={false}/>
            <div className="relative min-h-screen bg-[#fef7f9]  overflow-hidden pt-28 md:pt-40 xl:pt-16">
                <img src="https://251communications.com/static/media/Experential.7b84f039e3249ed0a770.png" alt="services" className='w-full h-full object-cover' />
                <img src="/aa.png" alt="services" className='w-full h-full object-cover' />
                
                
                <img src="https://251communications.com/static/media/Creatives.fb067fc0a3b38aecb671.png" alt="services" className='w-full h-full object-cover' />
                <img src="https://251communications.com/static/media/digital.c9bb6e058cf2b14c9dd3.jpg" alt="services" className='w-full h-full object-cover' />
                <img src="https://251communications.com/static/media/PR.3fc54baef9c1698fe188.jpg" alt="services" className='w-full h-full object-cover' />
                <img src="https://251communications.com/static/media/production.6c1119875f66cd34a32d.jpg" alt="services" className='w-full h-full object-cover' />
                <img src="https://251communications.com/static/media/Research.abdf476cc7724c6e4a9f.png" alt="services" className='w-full h-full object-cover' />
                <img src="https://251communications.com/static/media/vas.118f2cdcdb42e905084f.png" alt="services" className='w-full h-full object-cover' />
              
              
            </div>
        </>
    );
};


export default Services;
