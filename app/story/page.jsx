'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profilePic from '../../public/IMG_0335.jpg';

export default function Story() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center smooth-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Image 
                src={profilePic} 
                alt="Justin Zeng" 
                className="relative rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" 
                width={500} 
                height={500}
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-6 smooth-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              HI, I'M JUSTIN.
            </h1>
            
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a Seattle/New York-based software developer and data scientist. My mission is to create innovative solutions that drive business growth and solve real-world problems.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently, I'm pursuing a Master's in Data Science at Columbia University. Previously, I graduated from the University of Washington with a background in software development and data science. My work has involved leveraging machine learning algorithms, data analysis, and programming to tackle complex challenges.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I've contributed to several impactful projects, including developing data pipelines, predictive models, and interactive dashboards. My projects have spanned various industries, from healthcare to finance, each aiming to transform data into actionable insights.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                As a passionate data scientist and developer, I aim to advance the tech industry by promoting innovative solutions and fostering diversity and inclusion. I believe in the power of technology to make a positive impact on society and strive to share my knowledge and perspectives through collaborative efforts.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of my professional pursuits, I'm an avid skier, traveler, and food enthusiast.
              </p>
            </div>
            
            <Link 
              href="/gallery" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
            >
              <span>View my portfolio</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}