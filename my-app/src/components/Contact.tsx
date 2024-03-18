// Contact.tsx
import React from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import Navbar from './Navbar'

const Contact: React.FC = () => {
  return (
    <div>
    <Navbar/>
    <div className='Contact'>
    
      <h1>Want to contact me?</h1>
      {/* Contact page content */}
      <ContactForm/>
    </div>
    </div>
  );
};

export default Contact;
