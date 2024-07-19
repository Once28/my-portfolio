import React from 'react';

const tagColors = {
  'Backend Development': 'bg-blue-200 text-blue-800',
  'JavaScript': 'bg-yellow-200 text-yellow-800',
  'Data Science': 'bg-green-200 text-green-800',
  'Python': 'bg-indigo-200 text-indigo-800',
  'Software Architecture': 'bg-red-200 text-red-800',
  'Machine Learning': 'bg-purple-200 text-purple-800',
  'Database Management': 'bg-orange-200 text-orange-800',
  'Product Design': 'bg-pink-200 text-pink-800',
  'UX Research': 'bg-teal-200 text-teal-800',
  'Web App': 'bg-gray-200 text-gray-800',
  'Real-time Communication': 'bg-blue-200 text-blue-800',
  'Food Waste Reduction': 'bg-green-200 text-green-800',
  'Code Optimization': 'bg-red-200 text-red-800',
  'Social Media Analysis': 'bg-purple-200 text-purple-800',
  'Travel Industry': 'bg-orange-200 text-orange-800',
  'Full Stack Development': 'bg-pink-200 text-pink-800',
  'Product Management': 'bg-teal-200 text-teal-800',
  'Deep Learning': 'bg-indigo-200 text-indigo-800',
  'Computer Vision': 'bg-gray-200 text-gray-800',
  'AI': 'bg-yellow-200 text-yellow-800',
  'Game Development': 'bg-red-200 text-red-800',
  'Algorithm Optimization': 'bg-blue-200 text-blue-800',
  'Pathfinding': 'bg-green-200 text-green-800',
  'Graph Algorithms': 'bg-orange-200 text-orange-800',
  'Time Series Analysis': 'bg-purple-200 text-purple-800',
  'Stock Market': 'bg-pink-200 text-pink-800',
  'Java': 'bg-red-200 text-red-800',
  'PyTorch': 'bg-blue-200 text-blue-800',
  'TensorFlow': 'bg-green-200 text-green-800',
  'Keras': 'bg-purple-200 text-purple-800',
  'JavaScript': 'bg-yellow-200 text-yellow-800',
  'React': 'bg-blue-200 text-blue-800',
  'Next.js': 'bg-gray-200 text-gray-800',
};

const Tags = ({ tags }) => {
  return (
    <div className="flex space-x-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`inline-block text-xs px-2 py-1 rounded-full ${tagColors[tag] || 'bg-gray-200 text-gray-800'}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
