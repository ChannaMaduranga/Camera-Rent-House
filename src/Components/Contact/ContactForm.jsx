import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const notify = () => toast.success("Your message has been sent successfully!");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_nafi906', 'template_0p1csmy', e.target, 'FPOEMjykKOhgOsegk');
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitted(true);
      notify(); // Trigger toast notification
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  return (
    <div className="flex justify-center items-center pt-16 ">
      <form className="w-full max-w-2xl " onSubmit={sendEmail}>
        <div className="flex flex-row  md:mb-6 space-x-4">
          <div className="w-full md:w-1/2  mb-6 md:mb-0">
            <input
              className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
              type="text"
              placeholder="Your Name"
              name="name"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <input
              className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
              type="email"
              placeholder="Your Email"
              name="email"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <input
            className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
            type="text"
            placeholder="Subject"
            name="subject"
            value={contactForm.subject}
            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 h-32"
            placeholder="Message"
            name="message"
            value={contactForm.message}
            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#1ca088] hover:bg-secondary-main w-full text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-secondary-main"
          >
            SEND MESSAGE 
          </button>
        </div>
      </form>

      {/* Toast Container should be outside the condition */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
