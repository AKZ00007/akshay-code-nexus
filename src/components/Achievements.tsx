
import React from 'react';
import { Trophy, Award, Users, Code } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: "Top 9 National Hackathon",
      description: "Ranked 9th out of 118 teams for AI Sign Language Detection System at SUIET CODEMEET Hackathon",
      icon: <Trophy className="h-8 w-8" />,
      color: "gold",
      highlight: "Top 9/118"
    },
    {
      title: "15+ Real-World Projects",
      description: "Built diverse projects across AI, Web, Geo, and Mobile domains using Python & JavaScript",
      icon: <Code className="h-8 w-8" />,
      color: "blue",
      highlight: "15+ Projects"
    },
    {
      title: "Client Project Success",
      description: "Delivered real-world solutions with LLM integration, GIS workflows, and health-tech applications",
      icon: <Award className="h-8 w-8" />,
      color: "purple",
      highlight: "Client Work"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to open-source projects and collaborative development in full-stack applications",
      icon: <Users className="h-8 w-8" />,
      color: "green",
      highlight: "Open Source"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      gold: "border-yellow-400 text-yellow-400 bg-yellow-400/10 from-yellow-400 to-orange-400",
      blue: "border-blue-400 text-blue-400 bg-blue-400/10 from-blue-400 to-cyan-400",
      purple: "border-purple-400 text-purple-400 bg-purple-400/10 from-purple-400 to-pink-400",
      green: "border-green-400 text-green-400 bg-green-400/10 from-green-400 to-emerald-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Key <span className="text-blue-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and milestones that reflect my commitment to excellence and innovation in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="relative bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(achievement.color).split(' ').find(c => c.includes('from-'))} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg border ${getColorClasses(achievement.color)} group-hover:scale-110 transition-transform`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getColorClasses(achievement.color)}`}>
                        {achievement.highlight}
                      </span>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover effect decoration */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">2026</div>
            <div className="text-gray-400">Graduation Year</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-purple-400 mb-2">8.5</div>
            <div className="text-gray-400">CGPA</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-400">Tech Domains</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
            <div className="text-3xl font-bold text-yellow-400 mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};
