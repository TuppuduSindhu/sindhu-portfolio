
import { useState } from "react";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";
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
        'service_lv3dgup', // Your service ID
        'template_8gzqw87', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'XLkBZe6ccLPk2rK7m' // Your public key
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Let's connect and discuss opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:tuppudusindhu@gmail.com" className="text-white/80 hover:text-white transition-colors">
                    tuppudusindhu@gmail.com
                  </a>
                  <br />
                  <a href="mailto:2203031241341@paruluniversity.ac.in" className="text-white/80 hover:text-white transition-colors">
                    2203031241341@paruluniversity.ac.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-white/80">+91-6301601086</p>
                  <p className="text-white/80">+91-9490341484</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-medium">GitHub</p>
                  <a 
                    href="https://github.com/tuppudusindhu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    View Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
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
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
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
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
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
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none disabled:opacity-50"
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
      </div>
    </section>
  );
};

export default Contact;
