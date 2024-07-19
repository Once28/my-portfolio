const projects = [
  { id: 1, title: 'Project 1', image: '/logo.png', tags: ['Web Development', 'JavaScript'] },
  { id: 2, title: 'Project 2', image: '/pantry-pals.png', tags: ['Data Science', 'Python'] },
  { id: 3, title: 'Project 3', image: '/source.jpg', tags: ['Machine Learning', 'Python'] },
  // Add more projects as needed
];
  const Gallery = () => {
    return (
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="relative">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
              <div className="absolute bottom-0 bg-black bg-opacity-70 text-white p-2 w-full rounded-b-lg">
                <p className="font-bold">{project.title}</p>
                <p>Tags: {project.tags.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Gallery;
  