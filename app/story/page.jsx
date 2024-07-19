import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/IMG_0335.jpg';

export default function Story() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image src={profilePic} alt="Justin Zeng" className="rounded-lg shadow-lg" width={400} height={400} />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h1 className="text-4xl font-bold mb-4">HI, I'M JUSTIN.</h1>
          <p className="text-lg text-gray-700 mb-4">
            I'm a New York-based software developer and data scientist. My mission is to create innovative solutions that drive business growth and solve real-world problems.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Currently, I'm pursuing a Master's in Data Science at Columbia University. Previously, I graduated from the University of Washington with a background in software development and data science. My work has involved leveraging machine learning algorithms, data analysis, and programming to tackle complex challenges.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I've contributed to several impactful projects, including developing data pipelines, predictive models, and interactive dashboards. My projects have spanned various industries, from healthcare to finance, each aiming to transform data into actionable insights.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            As a passionate data scientist and developer, I aim to advance the tech industry by promoting innovative solutions and fostering diversity and inclusion. I believe in the power of technology to make a positive impact on society and strive to share my knowledge and perspectives through collaborative efforts.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Outside of my professional pursuits, I'm an avid skier, traveler, and food enthusiast.
          </p>
          <Link href="/gallery" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300">
            View my portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
