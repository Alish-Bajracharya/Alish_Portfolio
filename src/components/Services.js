import React from 'react';
import '../Styles/Services.css'; // Import external CSS for any custom styling

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          My <span className="text-red-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Web Development Services: Unlock the potential of your online presence with our expert web development services.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="service-item flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-80 h-80">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Custom Web Design" className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Custom Web Design</h3>
          <p className="text-gray-600 text-center">
            Transform your ideas into a stunning reality with our Custom Web Design service.
          </p>
        </div>
        <div className="service-item flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-80 h-80">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="Responsive Web Design" className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Responsive Web Design</h3>
          <p className="text-gray-600 text-center">
            Ensure your website looks amazing on every device with our responsive web design.
          </p>
        </div>
        <div className="service-item flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-80 h-80">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="E-commerce Web Design" className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">E-commerce Web Design</h3>
          <p className="text-gray-600 text-center">
            Launch and grow your online store with our E-commerce Web Design service.
          </p>
        </div>
        <div className="service-item flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-80 h-80">
          <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="UI/UX Web Design" className="mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">UI/UX Web Design</h3>
          <p className="text-gray-600 text-center">
            Elevate user engagement with intuitive interfaces and seamless experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
