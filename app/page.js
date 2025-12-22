'use client'
import React from 'react';
import WelcomeBlock from '../components/WelcomeBlock';
import Highlights from '../components/Highlights';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <WelcomeBlock />
      <div className='container mx-auto space-y-20 px-6 py-12'>
        <Highlights />
        <Recommendations />
        <Contact />
      </div>
    </div>
  );
}