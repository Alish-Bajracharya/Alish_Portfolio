import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out if you want to collaborate or have any questions.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
