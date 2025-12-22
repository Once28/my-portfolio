import React from 'react';

const tagColors = {
  'Backend Development': 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
  'JavaScript': 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30',
  'Data Science': 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
  'Python': 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
  'Software Architecture': 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30',
  'Machine Learning': 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
  'Database Management': 'bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30',
  'Product Design': 'bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/30',
  'UX Research': 'bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/30',
  'Web App': 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30',
  'Real-time Communication': 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
  'Food Waste Reduction': 'bg-lime-500/20 text-lime-700 dark:text-lime-300 border-lime-500/30',
  'Code Optimization': 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30',
  'Social Media Analysis': 'bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-500/30',
  'Travel Industry': 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30',
  'Full Stack Development': 'bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 border-fuchsia-500/30',
  'Product Management': 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
  'Deep Learning': 'bg-sky-500/20 text-sky-700 dark:text-sky-300 border-sky-500/30',
  'Computer Vision': 'bg-stone-500/20 text-stone-700 dark:text-stone-300 border-stone-500/30',
  'AI': 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30',
  'Game Development': 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30',
  'Algorithm Optimization': 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
  'Pathfinding': 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
  'Graph Algorithms': 'bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30',
  'Time Series Analysis': 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
  'Stock Market': 'bg-pink-500/20 text-pink-700 dark:text-pink-300 border-pink-500/30',
  'Java': 'bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30',
  'PyTorch': 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
  'TensorFlow': 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
  'Keras': 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
  'React': 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-500/30',
  'Next.js': 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30',
  'Research': 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30',
  'Convolutional Neural Networks': 'bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/30',
  'LoRA': 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30',
  'Medical Analysis': 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
  'NLP': 'bg-violet-500/20 text-violet-700 dark:text-violet-300 border-violet-500/30',
  'Business Intelligence': 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
};

const Tags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`inline-block text-xs px-3 py-1.5 rounded-full font-medium border transition-all hover:scale-105 ${
            tagColors[tag] || 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;