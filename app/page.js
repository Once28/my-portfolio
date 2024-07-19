'use client'
import React from 'react';
import WelcomeBlock from '../components/WelcomeBlock';
import Highlights from '../components/Highlights';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <WelcomeBlock />
      <Highlights />
      <Recommendations />
      <Contact />
    </div>
  );
}

