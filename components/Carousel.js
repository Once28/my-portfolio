'use client'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projects from '../data/projects';
import Tags from './Tags';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    pauseOnHover: true,
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-3xl shadow-2xl">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="relative w-full h-[600px] group">
            <div className="absolute inset-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="glass-dark rounded-2xl p-6 md:p-8 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{project.title}</h2>
                <div className="mb-4">
                  <Tags tags={project.tags} />
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold group"
                >
                  <span>View Project</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      {/* Custom slick dots styling */}
      <style jsx global>{`
        .slick-dots {
          bottom: 20px !important;
        }
        .slick-dots li button:before {
          color: white !important;
          font-size: 12px !important;
          opacity: 0.5 !important;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1 !important;
          color: #3b82f6 !important;
        }
      `}</style>
    </div>
  );
};

export default Carousel;