'use client'
import React from 'react';

const recommendations = [
  {
    title: 'Team Player',
    text: 'Justin is a team player who believes over-communication is better than less communication. He plays to his strengths and is an asset to his future teams.',
    author: 'Probudhho Chakraborty, Amazon Web Services',
  },
  {
    title: 'Persistence',
    text: 'I got to know Justin as a mentee during the Google Computer Science Research Mentorship Program and his persistence, ability to implement solutions to ambiguous tasks and openness to feedback impressed me. During the program, he went the extra mile to navigate his way into the research community, implementing several creative ideas and consistently incorporating feedback along the way.',
    author: 'Bhav Ashok, Google',
  },
];

const Recommendations = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 smooth-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Recommendations</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 md:p-10 card-hover smooth-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <svg className="w-12 h-12 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.984z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">"{rec.title}"</h3>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">{rec.text}</p>
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="font-bold text-gray-900 dark:text-gray-100">{rec.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;