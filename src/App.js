import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import aboutImage from '../src/assets/aaalish.png';
import bgImage from '../src/assets/ime.jpg'

import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const links = [
    { href: '#hero', text: 'Home' },
    { href: '#services', text: 'Services' },
    { href: '#projects', text: 'Projects' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' }
  ];

  const serviceData = [
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
  ];

  const contactData = [
    {
      type: 'Phone',
      icon: 'https://img.icons8.com/bubbles/100/000000/phone.png',
      details: ['+977-9824071911'],
    },
    {
      type: 'Email',
      icon: 'https://img.icons8.com/bubbles/100/000000/new-post.png',
      details: [
        'bajracharya.alish587@gmail.com',
        'np01cp4a22045@islingtoncollege.edu.np',
      ],
    },
    {
      type: 'Address',
      icon: 'https://img.icons8.com/bubbles/100/000000/map-marker.png',
      details: ['Harisiddhi-Lalitpur, Nepal'],
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alish-bajracharya-3256b5260',
      icon: 'https://img.icons8.com/bubbles/100/000000/linkedin.png',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/alish_.bajracharya?igsh=YXN2MDNkbWx1dXQ4',
      icon: 'https://img.icons8.com/bubbles/100/000000/instagram-new.png',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Alish-Bajracharya',
      icon: 'https://img.icons8.com/bubbles/100/000000/github.png',
    },
  ];

  return (
    <div className="App">
      <Navbar
        brandName="Alish Bajracharya"
        links={links}
        bgColor="bg-gray-800"
        textColor="white"
        brandColor="text-red-500" 
      />
      <Hero />
      <Services 
      title="My"
      description="Web Development Services: Unlock the potential of your online presence with our expert web development services."
      services={serviceData}
      />
      <Projects />
      <About 
        image={aboutImage}
        heading="About"
        subheading="Front End Developer"
        text="Hello! I`m Bajracharya Alish, a third-year Computing student with a passion for front-end development.  With a strong foundation in technology and a commitment to continuous learning, I aim to advance my career in the IT industry. Beyond coding, I enjoy designing and love to interact with people from different social background, and I`m dedicated to continuous learning and exploring new technologies..."
        linkedinUrl="https://www.linkedin.com/in/alish-bajracharya"
        email="bajracharya.alish587@gmail.com"
        resumeUrl="https://drive.google.com/file/d/1jnHtTAEL1PqCsWsySQGyvDEVZqa8sMDK/view?usp=sharing"
      />
      <Contact 
      contactItems={contactData}
      />
      <Footer 
      name="Alish Bajracharya"
      tagline="Your Complete Web Solution"
      socialLinks={socialLinks}
      copyrightYear={2024}
      />
    </div>
  );
};

export default App;
