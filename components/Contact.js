'use client'
import React from 'react';

const Contact = () => {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto smooth-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's connect before you head out, thanks for stopping by!
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-300 font-medium">
            YOU CAN REACH ME HERE!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <a 
              href="https://linkedin.com/in/justin-zeng" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 px-8 py-4 glass rounded-full hover:bg-blue-500 hover:text-white transition-all card-hover"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.792 0 0 .775 0 1.73v20.54C0 23.224.792 24 1.77 24h20.46c.978 0 1.77-.776 1.77-1.73V1.73C24 .775 23.208 0 22.23 0zM7.12 20.452H3.557V9.045H7.12v11.407zM5.34 7.582c-1.14 0-2.063-.927-2.063-2.065a2.065 2.065 0 112.064 2.065h-.001zm13.755 12.87h-3.564V14.99c0-1.303-.025-2.978-1.815-2.978-1.815 0-2.094 1.42-2.094 2.88v5.56h-3.566V9.045h3.42v1.556h.05c.477-.9 1.64-1.85 3.376-1.85 3.608 0 4.273 2.374 4.273 5.466v6.235h-.001z"/>
              </svg>
              <span className="text-xl font-semibold">@justinzeng</span>
            </a>
            <a 
              href="mailto:justinzeng007@gmail.com" 
              className="group flex items-center space-x-4 px-8 py-4 glass rounded-full hover:bg-indigo-500 hover:text-white transition-all card-hover"
            >
              <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xl font-semibold">justinzeng007@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;