import React from 'react';
import projectImage from '../assets/img-1.png'; 
import ProjectCard from './ProjectCard'; 

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      subtitle: 'Static Web Development | HTML, CSS, Javascript',
      description: 'Created and implemented the UI/UX design and developed a responsive and visually appealing frontend website.',
      image: projectImage,
    },
    {
      title: 'Project 2',
      subtitle: 'Dynamic Web Development | Java, JSP, MySQL',
      description: 'Developed a dynamic website with both admin and user panels, ensuring a user-friendly interface and optimal experience.',
      image: projectImage,
    },
    {
      title: 'Project 3',
      subtitle: 'Data Science Salary Analysis | Python',
      description: 'Conducted a comprehensive analysis of data science salary trends using Python, extracting insights from large datasets.',
      image: projectImage,
    },
    {
      title: 'Project 4',
      subtitle: 'Database Management | MySQL',
      description: 'Designed and implemented a robust database management system using MySQL, focusing on efficient data storage and retrieval.',
      image: projectImage,
    },
    {
      title: 'Project 5',
      subtitle: 'Project Management | Managing Projects, UI/UX Design',
      description: 'Developed a user-centric UI/UX design as part of a project management course, focusing on user interface design.',
      image: projectImage,
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="projects max-w-6xl mx-auto">
        <div className="projects-header text-center mb-12">
          <h1 className="text-5xl font-bold mb-12 whitespace-nowrap flex justify-center items-center text-black">
            Recent <span className="text-red-600 ml-2">Projects</span>
          </h1>
        </div>
        <div className="all-projects space-y-12">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
