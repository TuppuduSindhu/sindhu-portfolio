
import { useState } from "react";
import { Mail, Phone, Github, ExternalLink, Code, Trophy, BookOpen, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_lv3dgup',
        'template_8gzqw87',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'XLkBZe6ccLPk2rK7m'
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Email</p>
                  <a href="mailto:tuppudusindhu@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors">
                    tuppudusindhu@gmail.com
                  </a>
                  <br />
                  <a href="mailto:2203031241341@paruluniversity.ac.in" className="text-gray-600 hover:text-orange-500 transition-colors">
                    2203031241341@paruluniversity.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">WhatsApp</p>
                  <p className="text-gray-600">+91-6301601086</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">GitHub</p>
                  <a 
                    href="https://github.com/TuppuduSindhu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-orange-500 transition-colors inline-flex items-center gap-1"
                  >
                    View Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-100"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 disabled:bg-gray-100"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none disabled:opacity-50 disabled:bg-gray-100"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Personal Interests & Hobbies</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Reading Books</h4>
              <p className="text-gray-600">Exploring knowledge through literature and technical books</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Exploring New Things</h4>
              <p className="text-gray-600">Always curious about new technologies and innovations</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Coding & Web Development</h4>
              <p className="text-gray-600">Passionate about creating digital solutions and applications</p>
            </div>
          </div>
        </div>

        {/* Web Links Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Coding Profiles</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">LeetCode</h4>
              <a 
                href="https://leetcode.com/u/tuppudu_sindhu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Github className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">GitHub</h4>
              <a 
                href="https://github.com/TuppuduSindhu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Code className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">CodeChef</h4>
              <a 
                href="https://www.codechef.com/users/tuppudusindhu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-orange-500 p-3 rounded-lg w-fit mx-auto mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">HackerRank</h4>
              <a 
                href="https://www.hackerrank.com/profile/sindhu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-orange-500 hover:text-orange-600 transition-colors inline-flex items-center gap-1"
              >
                View Profile <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
