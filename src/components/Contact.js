import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="contact container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <h1 className="text-5xl font-bold inline-block text-black">
            Contact <span className="text-red-600">Info</span>
          </h1>
        </div>
        <div className="contact-items flex flex-col md:flex-row justify-between gap-8">
          {/* Phone Contact */}
          <div className="contact-item flex-1 p-8 flex items-center bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300 min-h-[250px]">
            <div className="icon mr-6">
              <img
                src="https://img.icons8.com/bubbles/100/000000/phone.png"
                alt="Phone Icon"
                className="w-16"
              />
            </div>
            <div className="contact-info">
              <h1 className="text-2xl font-semibold text-black">Phone</h1>
              <h2 className="text-lg mt-2">+977-9824071911</h2>
            </div>
          </div>

          {/* Email Contact */}
          <div className="contact-item flex-1 p-8 flex items-center bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300 min-h-[250px] lg:min-[300px]:">
            <div className="icon mr-6">
              <img
                src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                alt="Email Icon"
                className="w-50 h-32"
                onError={(e) => e.target.src = 'https://img.icons8.com/bubbles/100/000000/email.png'}  
              />
            </div>
            <div className="contact-info">
              <h1 className="text-2xl font-semibold text-black">Email</h1>
              <h2 className="text-lg mt-2">bajracharya.alish587@gmail.com</h2>
              <h2 className="text-lg mt-1">np01cp4a22045@islingtoncollege.edu.np</h2>
            </div>
          </div>

          {/* Address Contact */}
          <div className="contact-item flex-1 p-8 flex items-center bg-white rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300 min-h-[250px]">
            <div className="icon mr-6">
              <img
                src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
                alt="Address Icon"
                className="w-16"
              />
            </div>
            <div className="contact-info">
              <h1 className="text-2xl font-semibold text-black">Address</h1>
              <h2 className="text-lg mt-2">Harisiddhi-Lalitpur, Nepal</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
