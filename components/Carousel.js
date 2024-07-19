import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const projects = [
  { id: 1, title: 'Project 1', image: '/public/logo.png', tags: ['Web Development', 'JavaScript'] },
  { id: 2, title: 'Project 2', image: '/public/pantry pals.png', tags: ['Data Science', 'Python'] },
  { id: 3, title: 'Project 3', image: '/public/source.jpg', tags: ['Machine Learning', 'Python'] },
  // Add more projects as needed
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="w-full h-full">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-70 text-white p-4 rounded">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>Tags: {project.tags.join(', ')}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
