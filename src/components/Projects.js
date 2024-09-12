import React from 'react';
import '../Styles/Projects.css';  // External CSS file
import projectImage from '../assets/img-1.png';  // Corrected image path

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="projects max-w-6xl mx-auto">
        <div className="projects-header text-center mb-12">
          <h1 className="text-5xl font-bold mb- whitespace-nowrap flex justify-center items-center text-black">
            Recent <span className="text-red-600 ml-2">Projects</span>
          </h1>
        </div>
        <div className="all-projects space-y-12">
          {/* Project 1 */}
          <div className="project-item flex items-center justify-between mx-auto my-8 w-4/5 rounded-lg overflow-hidden shadow-lg custom-box">
            <div className="project-info w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
              <h1 className="text-4xl font-medium">Project 1</h1>
              <h2 className="text-2xl font-medium mt-4">Static Web Development | HTML, CSS, Javascript</h2>
              <p className="mt-4">
                Description: Created and implemented the UI/UX design and developed a responsive and visually appealing frontend website.
              </p>
            </div>
            <div className="project-img relative w-1/2 h-72">
              <img src={projectImage} alt="Project 1" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-item flex items-center justify-between mx-auto my-8 w-4/5 rounded-lg overflow-hidden shadow-lg custom-box">
            <div className="project-info w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
              <h1 className="text-4xl font-medium">Project 2</h1>
              <h2 className="text-2xl font-medium mt-4">Dynamic Web Development | Java, JSP, MySQL</h2>
              <p className="mt-4">
                Description: Developed a dynamic website with both admin and user panels, ensuring a user-friendly interface and optimal experience.
              </p>
            </div>
            <div className="project-img relative w-1/2 h-72">
              <img src={projectImage} alt="Project 2" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-item flex items-center justify-between mx-auto my-8 w-4/5 rounded-lg overflow-hidden shadow-lg custom-box">
            <div className="project-info w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
              <h1 className="text-4xl font-medium">Project 3</h1>
              <h2 className="text-2xl font-medium mt-4">Project Management | UI/UX Design</h2>
              <p className="mt-4">
                Description: Developed a user-centric UI/UX design as part of a project management course, focusing on user interface design.
              </p>
            </div>
            <div className="project-img relative w-1/2 h-72">
              <img src={projectImage} alt="Project 3" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-item flex items-center justify-between mx-auto my-8 w-4/5 rounded-lg overflow-hidden shadow-lg custom-box">
            <div className="project-info w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
              <h1 className="text-4xl font-medium">Project 4</h1>
              <h2 className="text-2xl font-medium mt-4">Database Management | MySQL</h2>
              <p className="mt-4">
                Description: Designed and implemented a robust database management system using MySQL, focusing on efficient data storage and retrieval.
              </p>
            </div>
            <div className="project-img relative w-1/2 h-72">
              <img src={projectImage} alt="Project 4" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-item flex items-center justify-between mx-auto my-8 w-4/5 rounded-lg overflow-hidden shadow-lg custom-box">
            <div className="project-info w-1/2 p-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
              <h1 className="text-4xl font-medium">Project 5</h1>
              <h2 className="text-2xl font-medium mt-4">Data Science Salary Analysis | Python</h2>
              <p className="mt-4">
                Description: Conducted a comprehensive analysis of data science salary trends using Python, extracting insights from large datasets.
              </p>
            </div>
            <div className="project-img relative w-1/2 h-72">
              <img src={projectImage} alt="Project 5" className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
