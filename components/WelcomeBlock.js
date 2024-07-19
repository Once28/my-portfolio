import React from "react";

const WelcomeBlock = () => {
  const scrollToProjects = () => {
    document.getElementById("projects-section").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative w-full h-96 md:h-[36rem] bg-cover bg-center"
      style={{ backgroundImage: "url('/reflection pic.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-white">
          Justin Zeng
        </h1>
        <div className="bg-gradient-to-b from-transparent bg-opacity-50 p-4 rounded-lg text-center">
          <p className="text-2xl mb-2 drop-shadow-lg">
            Welcome to my portfolio!
          </p>
          <p className="text-lg italic drop-shadow-lg">
            Make yourself at home :) Grab a drink from the fridge
          </p>
          <div className="mt-6">
            <button
              onClick={scrollToProjects}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlock;
