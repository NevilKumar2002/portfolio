import React, { useState } from "react";
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when user starts typing in the field
    setErrors({
      ...errors,
      [name]: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Email sent successfully
          toast.success("Form submitted successfully! We will reach out to you soon!");
          // Clear form after submission
          setFormData({
            name: "",
            email: "",
            number: "",
            message: ""
          });
        } else {
          // Handle server error
          toast.error("Error sending email. Please try again later.");
        }
      } catch (error) {
        // Handle network error
        toast.error("Network error. Please try again later.");
      }
    } else {
      // Display validation errors
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    }

    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!/^\d{10}$/.test(data.number)) {
      errors.number = "Invalid phone number";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  return (
    <div className="contact-total-container">
        
      <div className="contact-left-container">
      <h2>CONTACT WITH ME</h2>
        <div className="contact-container">
          <p>
            If you have any questions or concerns, please don't hesitate to
            contact me. I am open to any work opportunities that align with my
            skills and interests.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Your Name :</label>
            <input
              type="text"
              name="name"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <br />
            <label htmlFor="email"> Your Email:</label>
            <input
              type="email"
              name="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <br />
            <label htmlFor="number"> Your Contact :</label>
            <input
              type="text"
              name="number"
              placeholder=""
              value={formData.number}
              onChange={handleChange}
              required
            />
            {errors.number && <span className="error">{errors.number}</span>}
            <br />
            <label htmlFor="message"> Your Message :</label>
            <textarea
              className="responsive-text-area"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            {errors.message && <span className="error">{errors.message}</span>}
            <br />
            <button type="submit" className="form-button">Send Message</button>
          </form>
        </div>
      </div>
      <div className="contact-right-container" >

      <div className="contact-item1">
        <div className="icon-circle">
          <EmailIcon />
        </div>
        <a href="mailto:example@example.com">gurramnevilkumar@gmail.com</a>
      </div>
      <div className="contact-item1">
        <div className="icon-circle">
          <PhoneIcon />
        </div>
        <a href="tel:+917569064280">+91 7569064280</a>
      </div>
      <div className="contact-item1">
        <div className="icon-circle">
          <HomeIcon />
        </div>
        <span>Hyderabad, Telangana, India</span>
      </div>
      
      <div className="social-media1">
       <div className="contact-item1">
       <div className="icon-circle">
          <GitHubIcon />
        </div>
       <a href="https://github.com/NevilKumar2002/" target="_blank" rel="noopener noreferrer">
        
        </a>
       </div>
       <div className="contact-item1">
       <div className="icon-circle">
          <FacebookIcon />
        </div>
    <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
        
        
        </a>
        </div> 
        <div className="contact-item1">
        <div className="icon-circle">
          <LinkedInIcon />
        </div>
        <a href="https://www.linkedin.com/in/nevil-kumar-gurram-6898b5267/" target="_blank" rel="noopener noreferrer">
         
         
        </a>
        </div>
      </div>
      </div>
      <ToastContainer />

    </div>
  );
};

export default Contact;
