'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <ContactInfo
                  icon="📧"
                  label="Email"
                  value="your.email@example.com"
                  link="mailto:your.email@example.com"
                />
                <ContactInfo
                  icon="💼"
                  label="LinkedIn"
                  value="linkedin.com/in/yourprofile"
                  link="https://linkedin.com/in/yourprofile"
                />
                <ContactInfo
                  icon="🐙"
                  label="GitHub"
                  value="github.com/yourusername"
                  link="https://github.com/yourusername"
                />
                <ContactInfo
                  icon="🐦"
                  label="Twitter"
                  value="@yourhandle"
                  link="https://twitter.com/yourhandle"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Connect?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Discuss collaboration opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Share ideas and insights
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Ask questions about my work
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  Network and build connections
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
              >
                Send Message
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-md">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactInfo({ icon, label, value, link }: { icon: string; label: string; value: string; link: string }) {
  return (
    <div className="flex items-start space-x-3">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {value}
        </a>
      </div>
    </div>
  );
}
