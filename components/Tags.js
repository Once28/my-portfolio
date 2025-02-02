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
  'Real-time Communication': 'bg-cyan-200 text-cyan-800',
  'Food Waste Reduction': 'bg-lime-200 text-lime-800',
  'Code Optimization': 'bg-rose-200 text-rose-800',
  'Social Media Analysis': 'bg-violet-200 text-violet-800',
  'Travel Industry': 'bg-amber-200 text-amber-800',
  'Full Stack Development': 'bg-fuchsia-200 text-fuchsia-800',
  'Product Management': 'bg-emerald-200 text-emerald-800',
  'Deep Learning': 'bg-sky-200 text-sky-800',
  'Computer Vision': 'bg-stone-200 text-stone-800',
  'AI': 'bg-amber-300 text-amber-900',
  'Game Development': 'bg-red-300 text-red-900',
  'Algorithm Optimization': 'bg-blue-300 text-blue-900',
  'Pathfinding': 'bg-green-300 text-green-900',
  'Graph Algorithms': 'bg-orange-300 text-orange-900',
  'Time Series Analysis': 'bg-purple-300 text-purple-900',
  'Stock Market': 'bg-pink-300 text-pink-900',
  'Java': 'bg-red-400 text-red-900',
  'PyTorch': 'bg-blue-400 text-blue-900',
  'TensorFlow': 'bg-green-400 text-green-900',
  'Keras': 'bg-purple-400 text-purple-900',
  'React': 'bg-indigo-400 text-indigo-900',
  'Next.js': 'bg-gray-400 text-gray-900',
  'Research': 'bg-yellow-400 text-yellow-900',
  'Convolutional Neural Networks': 'bg-teal-400 text-teal-900',
  'LoRA': 'bg-rose-400 text-rose-900',
  'Medical Analysis': 'bg-cyan-400 text-cyan-900',
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
