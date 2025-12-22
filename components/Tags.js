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

// Light variant for dark backgrounds
const tagColorsLight = {
  'Backend Development': 'bg-blue-400/30 text-blue-100 border-blue-400/50',
  'JavaScript': 'bg-yellow-400/30 text-yellow-100 border-yellow-400/50',
  'Data Science': 'bg-green-400/30 text-green-100 border-green-400/50',
  'Python': 'bg-indigo-400/30 text-indigo-100 border-indigo-400/50',
  'Software Architecture': 'bg-red-400/30 text-red-100 border-red-400/50',
  'Machine Learning': 'bg-purple-400/30 text-purple-100 border-purple-400/50',
  'Database Management': 'bg-orange-400/30 text-orange-100 border-orange-400/50',
  'Product Design': 'bg-pink-400/30 text-pink-100 border-pink-400/50',
  'UX Research': 'bg-teal-400/30 text-teal-100 border-teal-400/50',
  'Web App': 'bg-gray-400/30 text-gray-100 border-gray-400/50',
  'Real-time Communication': 'bg-cyan-400/30 text-cyan-100 border-cyan-400/50',
  'Food Waste Reduction': 'bg-lime-400/30 text-lime-100 border-lime-400/50',
  'Code Optimization': 'bg-rose-400/30 text-rose-100 border-rose-400/50',
  'Social Media Analysis': 'bg-violet-400/30 text-violet-100 border-violet-400/50',
  'Travel Industry': 'bg-amber-400/30 text-amber-100 border-amber-400/50',
  'Full Stack Development': 'bg-fuchsia-400/30 text-fuchsia-100 border-fuchsia-400/50',
  'Product Management': 'bg-emerald-400/30 text-emerald-100 border-emerald-400/50',
  'Deep Learning': 'bg-sky-400/30 text-sky-100 border-sky-400/50',
  'Computer Vision': 'bg-stone-400/30 text-stone-100 border-stone-400/50',
  'AI': 'bg-amber-400/30 text-amber-100 border-amber-400/50',
  'Game Development': 'bg-red-400/30 text-red-100 border-red-400/50',
  'Algorithm Optimization': 'bg-blue-400/30 text-blue-100 border-blue-400/50',
  'Pathfinding': 'bg-green-400/30 text-green-100 border-green-400/50',
  'Graph Algorithms': 'bg-orange-400/30 text-orange-100 border-orange-400/50',
  'Time Series Analysis': 'bg-purple-400/30 text-purple-100 border-purple-400/50',
  'Stock Market': 'bg-pink-400/30 text-pink-100 border-pink-400/50',
  'Java': 'bg-red-400/30 text-red-100 border-red-400/50',
  'PyTorch': 'bg-blue-400/30 text-blue-100 border-blue-400/50',
  'TensorFlow': 'bg-green-400/30 text-green-100 border-green-400/50',
  'Keras': 'bg-purple-400/30 text-purple-100 border-purple-400/50',
  'React': 'bg-indigo-400/30 text-indigo-100 border-indigo-400/50',
  'Next.js': 'bg-gray-400/30 text-gray-100 border-gray-400/50',
  'Research': 'bg-yellow-400/30 text-yellow-100 border-yellow-400/50',
  'Convolutional Neural Networks': 'bg-teal-400/30 text-teal-100 border-teal-400/50',
  'LoRA': 'bg-rose-400/30 text-rose-100 border-rose-400/50',
  'Medical Analysis': 'bg-cyan-400/30 text-cyan-100 border-cyan-400/50',
  'NLP': 'bg-violet-400/30 text-violet-100 border-violet-400/50',
  'Business Intelligence': 'bg-emerald-400/30 text-emerald-100 border-emerald-400/50',
};

const Tags = ({ tags, light = false }) => {
  const colorMap = light ? tagColorsLight : tagColors;
  
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`inline-block text-xs px-3 py-1.5 rounded-full font-medium border transition-all hover:scale-105 ${
            colorMap[tag] || (light 
              ? 'bg-gray-400/30 text-gray-100 border-gray-400/50' 
              : 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border-gray-500/30')
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;