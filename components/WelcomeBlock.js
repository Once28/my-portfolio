'use client'
import React from "react";

const WelcomeBlock = () => {
  const scrollToProjects = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/reflection pic.jpg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 max-w-4xl mx-auto text-center smooth-fade-in">
        <div className="mb-6">
          <h1 className="text-7xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            Justin Zeng
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
        </div>
        
        <div className="glass-dark rounded-3xl p-8 md:p-12 backdrop-blur-xl border border-white/10 shadow-2xl max-w-2xl">
          <p className="text-3xl md:text-4xl mb-4 font-semibold">
            Welcome to my portfolio!
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 italic">
            Make yourself at home :) Grab a drink from the fridge
          </p>
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explore Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 shimmer"></span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeBlock;