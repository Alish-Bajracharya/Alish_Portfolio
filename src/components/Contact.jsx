import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Contact.css';

const Contact = ({ contactItems }) => {
  return (
    <section id="contact" className="py-24">
      <div className="contact container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h1 className="text-5xl font-bold inline-block text-black">
            Contact <span className="text-red-600">Info</span>
          </h1>
        </div>
        <div className="contact-items flex flex-col md:flex-row justify-between gap-8">
          {contactItems.map((item, index) => (
            <div key={index} className="contact-item flex-1 p-8 flex items-center bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300 min-h-[250px]">
              <div className="icon mr-6">
                <img
                  src={item.icon}
                  alt={`${item.type} Icon`}
                  className="w-16"
                />
              </div>
              <div className="contact-info">
                <h1 className="text-2xl font-semibold text-black">{item.type}</h1>
                {item.details.map((detail, idx) => (
                  <h2 key={idx} className="text-lg mt-2">{detail}</h2>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  contactItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Contact;
