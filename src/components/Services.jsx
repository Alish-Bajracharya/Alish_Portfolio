import React from 'react';
import PropTypes from 'prop-types';


const ServiceItem = ({ image, title, description }) => (
  <div className="service-item flex flex-col items-center p-6 bg-gray-200 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-80 h-80">
    <img src={image} alt={title} className="mx-auto mb-4" />
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-center">
      {description}
    </p>
  </div>
);

const Services = ({ title, description, services }) => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          {title} <span className="text-red-600">Services</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

Services.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

Services.defaultProps = {
  title: 'My',
  description: 'Web Development Services: Unlock the potential of your online presence with our expert web development services.',
  services: [
    {
      image: 'https://img.icons8.com/bubbles/100/000000/services.png',
      title: 'Custom Web Design',
      description: 'Transform your ideas into a stunning reality with our Custom Web Design service.'
    },
    {
      image: 'https://img.icons8.com/bubbles/100/000000/services.png',
      title: 'Responsive Web Design',
      description: 'Ensure your website looks amazing on every device with our responsive web design.'
    },
    {
      image: 'https://img.icons8.com/bubbles/100/000000/services.png',
      title: 'E-commerce Web Design',
      description: 'Launch and grow your online store with our E-commerce Web Design service.'
    },
    {
      image: 'https://img.icons8.com/bubbles/100/000000/services.png',
      title: 'UI/UX Web Design',
      description: 'Elevate user engagement with intuitive interfaces and seamless experiences.'
    }
  ]
};

export default Services;
