
import React from 'react';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>
      
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-fade-in">
                Akshay N Dolainkar
              </h1>
              <div className="text-xl sm:text-2xl text-gray-300 mb-6 animate-fade-in delay-200">
                <span className="text-blue-400">Developer</span> | 
                <span className="text-purple-400"> Tech Enthusiast</span> | 
                <span className="text-pink-400"> Designer</span>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-300">
                Passionate Software Developer (2026 Batch) with hands-on experience across 15+ projects in Python and JavaScript, 
                specializing in AI/ML, web development, and geospatial intelligence.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 animate-fade-in delay-400">
              {['Python', 'JavaScript', 'React.js', 'Flask', 'TensorFlow', 'AI/ML', 'GIS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm border border-gray-700 hover:border-blue-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in delay-500">
              <a
                href="/resume.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg group flex items-center justify-center rounded"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
              <Button 
                variant="outline" 
                onClick={scrollToProjects}
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 text-lg group"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in delay-600">
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group">
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group">
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="mailto:aksp.2004rm@gmail.com" className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors group">
                <Mail className="h-5 w-5 text-gray-400 group-hover:text-green-400" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in delay-700">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <img
                    src="/myphoto.jpg"
                    alt="Akshay N Dolainkar"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};
