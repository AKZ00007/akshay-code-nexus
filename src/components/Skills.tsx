
import React from 'react';
import { Code, Database, Brain, Globe, Wrench, Smartphone } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "blue",
      skills: ["Python", "JavaScript", "Dart"]
    },
    {
      title: "Frontend",
      icon: <Smartphone className="h-6 w-6" />,
      color: "purple",
      skills: ["React.js", "Tailwind CSS", "HTML/CSS", "Flutter"]
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      color: "green",
      skills: ["Flask", "FastAPI", "Node.js", "REST APIs", "WebSockets"]
    },
    {
      title: "AI/ML",
      icon: <Brain className="h-6 w-6" />,
      color: "red",
      skills: ["TensorFlow", "Hugging Face", "LangChain", "RAG Pipeline", "Flask-SocketIO"]
    },
    {
      title: "Geospatial",
      icon: <Globe className="h-6 w-6" />,
      color: "yellow",
      skills: ["Google Earth Engine", "GeoPandas", "Shapely", "Folium", "PostGIS"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="h-6 w-6" />,
      color: "indigo",
      skills: ["Docker", "Git", "Firebase", "JWT Auth", "Postman", "VS Code"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-400 text-blue-400 bg-blue-400/10",
      purple: "border-purple-400 text-purple-400 bg-purple-400/10",
      green: "border-green-400 text-green-400 bg-green-400/10",
      red: "border-red-400 text-red-400 bg-red-400/10",
      yellow: "border-yellow-400 text-yellow-400 bg-yellow-400/10",
      indigo: "border-indigo-400 text-indigo-400 bg-indigo-400/10"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML, geospatial analysis, and modern DevOps practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg ${getColorClasses(category.color)} mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 text-sm rounded-full border transition-all duration-200 hover:scale-105 ${getColorClasses(category.color)}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "PyMuPDF", "BeautifulSoup", "FAISS", "ChromaDB", "Pyproj", 
              "Leaflet.js", "Pydeck", "YOLO", "Firestore", "Linux"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
