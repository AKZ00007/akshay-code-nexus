
import React from 'react';
import { ExternalLink, Github, MapPin, MessageSquare, FileText, Smartphone, Eye, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "GIS-AI Assistant",
      description: "Natural language-powered geospatial analysis system using Python, Flask, and OpenAI GPT-4 with real-time spatial data from Google Earth Engine.",
      tech: ["Python", "Flask", "Streamlit", "GPT-4", "GEE", "Folium", "ChromaDB", "PostGIS"],
      icon: <MapPin className="h-6 w-6" />,
      color: "blue",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    },
    {
      title: "Sleek Talk Nexus",
      description: "Full-stack AI chat platform with React.js and Flask, integrated with Hugging Face LLMs via RAG pipeline and ChromaDB vector search.",
      tech: ["React.js", "Tailwind CSS", "Flask", "Hugging Face", "Mistral-7B", "RAG", "JWT"],
      icon: <MessageSquare className="h-6 w-6" />,
      color: "purple",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      title: "Doc + URL Chatbot",
      description: "Web and mobile app for querying uploaded PDFs and web content using BeautifulSoup, PyMuPDF, and Hugging Face Transformers.",
      tech: ["React Native", "Flutter", "BeautifulSoup", "PyMuPDF", "FAISS", "Firebase"],
      icon: <FileText className="h-6 w-6" />,
      color: "green",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
    },
    {
      title: "Level Up Life",
      description: "Flutter-based gamified habit tracker app for mental and physical wellness with XP, levels, streaks, and character progression.",
      tech: ["Flutter", "Dart", "Firebase", "UI/UX", "Gamification"],
      icon: <Smartphone className="h-6 w-6" />,
      color: "red",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
    },
    {
      title: "AI Sign Language Detection",
      description: "Real-time gesture-to-speech system using TensorFlow and Flask-SocketIO. Ranked Top 9 out of 118 teams at national hackathon.",
      tech: ["TensorFlow", "Flask-SocketIO", "React.js", "WebSockets", "AI"],
      icon: <Eye className="h-6 w-6" />,
      color: "yellow",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop"
    },
    {
      title: "Habitat Knee Posture Monitor",
      description: "Health-tech web app for tracking post-operative knee posture recovery using real-time analytics for Yenepoya Hospital.",
      tech: ["Python", "Flask", "React.js", "Health-tech", "Real-time Analytics"],
      icon: <Heart className="h-6 w-6" />,
      color: "indigo",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-400 text-blue-400 bg-blue-400/10 hover:bg-blue-400/20",
      purple: "border-purple-400 text-purple-400 bg-purple-400/10 hover:bg-purple-400/20",
      green: "border-green-400 text-green-400 bg-green-400/10 hover:bg-green-400/20",
      red: "border-red-400 text-red-400 bg-red-400/10 hover:bg-red-400/20",
      yellow: "border-yellow-400 text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400/20",
      indigo: "border-indigo-400 text-indigo-400 bg-indigo-400/10 hover:bg-indigo-400/20"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions spanning AI/ML, geospatial intelligence, health-tech, and mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className={`absolute top-4 left-4 p-2 rounded-lg ${getColorClasses(project.color)}`}>
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded border border-gray-700">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-800">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
