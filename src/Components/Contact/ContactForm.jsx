import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex justify-center items-center pt-16 ">
      <form className="w-full max-w-2xl ">
        <div className="flex flex-row  md:mb-6 space-x-4">
          {/* Name Input */}
          <div className="w-full md:w-1/2  mb-6 md:mb-0">
            <input
              className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
              type="text"
              placeholder="Your Name"
            />
          </div>
          {/* Email Input */}
          <div className="w-full md:w-1/2">
            <input
              className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        {/* Subject Input */}
        <div className="mb-6">
          <input
            className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600"
            type="text"
            placeholder="Subject"
          />
        </div>
        {/* Message Text Area */}
        <div className="mb-6">
          <textarea
            className="appearance-none block w-full border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-green-600 h-32"
            placeholder="Message"
          ></textarea>
        </div>
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#1ca088] hover:bg-secondary-main w-full text-white font-semibold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-secondary-main"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
