import React, { useState } from "react";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

const projectData = [
  {
    title: "Jiwan Medico – E-Pharmacy System",
    image:
      "https://cdn.dribbble.com/userupload/43171475/file/original-44f5aac622f7d6877858a903c40bfaa1.png?format=webp&resize=400x300&vertical=center",
    description:
      "A MERN stack e-pharmacy platform for users, doctors, pharmacists, and admin.",
    details:
      "Features: emergency medicine delivery, doctor appointment booking, pharmacist live chat with Socket.io, prescription verification, promo codes for chronic patients, and delivery tracking. Focused on secure medical data and intuitive UX.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Socket.io",
      "Figma",
    ],
    github: "https://github.com/Alish-Bajracharya/jiwan-med",
    live: "https://jiwanmedico.netlify.app",
  },
  {
    title: "Disease Prediction & Medicine Recommendation",
    image:
      "https://images.pexels.com/photos/7088521/pexels-photo-7088521.jpeg", // data & healthcare illustration
    description:
      "Machine learning system predicting diseases and recommending medicines.",
    details:
      "Used KNN, Random Forest, and SVC models. Data preprocessing with Pandas & NumPy, evaluated model accuracy, and provided medicine suggestions based on predicted diseases.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn"],
    github: "https://github.com/Alish-Bajracharya/Artificial-Intelligence",
  },
  {
    title: "Kundali Generator – Flutter Mobile App",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // mobile development
    description:
      "Mobile app generating personalized Kundali charts using Flutter.",
    details:
      "Implemented birth chart calculations, astrology predictions, and UI for easy input of user birth data. Integrated date/time pickers and navigation between charts and analysis.",
    tech: ["Flutter", "Dart", "Provider", "UI/UX Design"],
    github: "https://github.com/YourUsername/kundali-app",
  },
  {
    title: "Television Dynamic Website",
    image:
      "https://user-images.githubusercontent.com/60310009/92144693-b45e2400-ee34-11ea-9a37-ba3f177e6100.png", // TV/web related
    description:
      "Dynamic web platform using Java, JSP, and MySQL with admin & user panels.",
    details:
      "Includes product management, user authentication, dynamic content rendering, and responsive design from Figma mockups.",
    tech: ["Java", "JSP", "MySQL", "Figma"],
    github: "https://github.com/YourUsername/television-website",
  },
  {
    title: "Thumki Resort Website",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg", // resort/travel
    description: "Responsive website for Thumki Resort.",
    details:
      "React.js + Tailwind CSS with API integration for rooms and pricing. Reusable components and optimized UI.",
    tech: ["React.js", "TailwindCSS", "API Integration"],
    github: "https://github.com/Alish-Bajracharya/thumki-digisoft",
    live: "https://thumkiresort.com.np/",
  },
  {
    title: "Aashirwad Resort Website",
    image:
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg", // luxury resort
    description: "Responsive website for Aashirwad Resort.",
    details:
      "React.js + Tailwind CSS, integrated dynamic content and optimized UI for mobile and desktop.",
    tech: ["React.js", "TailwindCSS", "API Integration"],
    github: "https://github.com/Alish-Bajracharya/aashirwad",
    live: "aashirwad-five.vercel.app",
  },
  {
    title: "Royal Home Resort Website",
    image:
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg", // villa/resort
    description: "Responsive website for Royal Home Resort.",
    details:
      "React.js + Tailwind CSS, dynamic content for rooms, prices, and resort info, with reusable components and performance optimization.",
    tech: ["React.js", "TailwindCSS", "API Integration"],
    github: "https://github.com/Alish-Bajracharya/royal-homeXdigisoft",
    live: "https://royalshomeresort.com.np/",
  },
  {
    title: "Vyapar App Homepage & FAQ Clone",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", // UI/website development
    description:
      "Pixel-perfect frontend clone of Vyapar application homepage and FAQ section.",
    details:
      "Reusable components, interactive FAQ system, sidebar navigation, responsive UI with Tailwind CSS.",
    tech: ["React.js", "TailwindCSS", "JavaScript"],
    github: "https://github.com/Alish-Bajracharya/Vyapar.Home-intern-",
  },
];

  return (
    <section id="projects" className="bg-[#0b0b0b] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-6">
          My <span className="text-[#caa577]">Projects</span>
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
          Academic and professional projects demonstrating full-stack, Flutter, and UI/UX experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="group bg-white/5 backdrop-blur-lg border border-[#caa577]/20 rounded-2xl overflow-hidden hover:border-[#caa577] hover:-translate-y-2 transition duration-500 cursor-pointer"
            >
              <img
                src={project.image}
                className="h-56 w-full object-cover group-hover:scale-105 transition"
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#caa577]">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#caa577] text-black px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-4 text-[#caa577] text-sm font-semibold">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
            <div className="bg-[#111] max-w-3xl w-full rounded-2xl p-8 border border-[#caa577]/30">
              <button
                onClick={() => setActiveProject(null)}
                className="float-right text-gray-400 hover:text-white"
              >
                ✕
              </button>
              <img
                src={activeProject.image}
                className="w-full h-72 object-cover rounded-xl mb-6"
                alt={activeProject.title}
              />
              <h3 className="text-3xl font-bold text-[#caa577] mb-4">
                {activeProject.title}
              </h3>
              <p className="text-gray-300 mb-4">{activeProject.details}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#caa577] text-black text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black rounded-lg"
                  >
                    GitHub
                  </a>
                )}
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-[#caa577] text-black rounded-lg"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href="#contact"
                  className="px-5 py-2 border border-[#caa577] text-[#caa577] rounded-lg"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;