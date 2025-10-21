import React from 'react';

function Contact() {
  return (
    <div className="max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Have feedback, ideas, or questions? We value your voice.
      </p>
      <form
        action="https://formspree.io/f/mjvqqqko"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
          rows="4"
          required
        ></textarea>
        <button
          type="submit"
          className="btn-danger"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
