// src/components/ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMsg('');
    setSuccessMsg('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      return 'All fields are required.';
    }
    if (!validateEmail(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    try {
      const response = await axios.post(
        'https://vernanbackend.ezlab.in/api/contact-us/',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );
      if (response.status === 200) {
        setSuccessMsg('Form Submitted');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setErrorMsg('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMsg('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="contact-form-heading">Join the Story</h2>
      <h2>Ready to bring your vision to life? Let’s talk.</h2>
      {errorMsg && <div className="error-message">{errorMsg}</div>}
      {successMsg && <div className="success-message">{successMsg}</div>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input 
            type="text" 
            name="phone" 
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
