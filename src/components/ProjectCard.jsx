import React from 'react';

const ProjectCard = ({ title, subtitle, description, image }) => {
  return (
    <div className="project-item flex flex-col sm:flex-row items-stretch mx-auto my-8 w-4/5 h-auto rounded-lg overflow-hidden shadow-lg">
      <div className="project-info w-full sm:w-2/3 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-medium">{title}</h1>
          <h2 className="text-2xl font-medium mt-3">{subtitle}</h2>
          <p className="mt-5 line-clamp-4">{description}</p>
        </div>
        <div className="mt-5">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded transition-all">
            Read More
          </button>
        </div>
      </div>
      <div className="project-img w-full sm:w-1/2 h-72">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
