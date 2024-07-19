import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Let's connect before you head out, thanks for stopping by!</h2>
        <p className="text-xl mb-6">YOU CAN REACH ME HERE!</p>
        <div className="flex justify-center space-x-12">
          <a href="https://linkedin.com/in/justin-zeng" className="flex items-center space-x-2 text-gray-900 hover:underline">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <title>LinkedIn</title>
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="text-2xl">@justinzeng</span>
          </a>
          <a href="mailto:justinzeng007@gmail.com" className="flex items-center space-x-2 text-gray-900 hover:underline">
            <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
              <title>Email</title>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span className="text-2xl">justinzeng007@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
