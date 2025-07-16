
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="p-3 bg-blue-400/10 rounded-lg border border-blue-400 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-400">aksp.2004rm@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="p-3 bg-green-400/10 rounded-lg border border-green-400 text-green-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-400">Mangalore, Karnataka, India</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="p-3 bg-purple-400/10 rounded-lg border border-purple-400 text-purple-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-white font-medium">Available for</div>
                  <div className="text-gray-400">Freelance & Full-time opportunities</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 text-gray-400 transition-colors group"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-600 hover:text-blue-600 text-gray-400 transition-colors group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-lg border border-gray-700 hover:border-green-400 hover:text-green-400 text-gray-400 transition-colors group"
                >
                  <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-blue-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Akshay N Dolainkar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
