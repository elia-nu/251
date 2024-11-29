'use client'
import React from 'react';
import Career from '@/app/Component/Career';
import Navbar from '@/app/Component/Navbar';
const Component = () => {
  return (
    <div>
      <Navbar home={false}/>
<Career/>
    </div>
  );
};

export default Component;
