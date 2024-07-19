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
    <div className="bg-gray-50 text-gray-900 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {recommendations.map((rec, index) => (
            <div key={index} className="text-center p-8 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">"{rec.title}"</h3>
              <p className="text-lg mb-6">{rec.text}</p>
              <p className="font-bold">{rec.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
