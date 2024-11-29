'use client'
import React from 'react';
import About1 from '@/app/Component/About1';
import Navbar from '@/app/Component/Navbar';
const Component = () => {
  return (
    <div>
<Navbar home={false}/>
<About1/>
    </div>
  );
};

export default Component;
