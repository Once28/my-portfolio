import React from 'react';
import projects from '../../data/projects';
import Tags from '../../components/tags';

const Gallery = () => {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="relative block">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
              <div className="absolute bottom-0 bg-black bg-opacity-70 text-white p-2 w-full rounded-b-lg">
                <p className="font-bold">{project.title}</p>
                <Tags tags={project.tags} />
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;