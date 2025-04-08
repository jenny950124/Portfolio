import React, { useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { MeiModel } from '../components/MeiModel';

const Contact = () => {
  const [triggerRun, setTriggerRun] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTriggerRun(true);
  };

  return (
    <section className="contact-page">
      <MeiModel triggerRun={triggerRun} isListening={isUserTyping} />

      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Let's Work Together!</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                placeholder="Your name"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Your email"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
              />
            </div>
            <div className="input-group">
              <FaCommentDots className="input-icon" />
              <textarea
                placeholder="Your message"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
