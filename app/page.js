'use client'
import React from 'react';
import WelcomeBlock from '../components/WelcomeBlock';
import Highlights from '../components/Highlights';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <WelcomeBlock />
      <div className=' container mx-auto space-y-8 px-8 py-4'>
        <Highlights />
        <Recommendations />
        <Contact />
      </div>
    </div>
  );
}

