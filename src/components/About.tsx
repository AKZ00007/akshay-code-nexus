
import React from 'react';
import { GraduationCap, Code, MapPin } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Biography */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Tech Enthusiast & Problem Solver</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Software Developer with hands-on experience in AI/ML, full-stack development, 
              geospatial systems, and mobile applications. I thrive in startup-like, fast-paced environments 
              where I can learn continuously, build collaboratively, and ship impactful products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a strong foundation in Python and JavaScript, I enjoy solving real-world problems by 
              combining clean code, scalable architecture, and thoughtful user experience. My work spans 
              from AI-powered geospatial analysis systems to real-time chat applications and mobile apps.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-900 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">Top 9</div>
                <div className="text-gray-400 text-sm">Hackathon Rank</div>
              </div>
              <div className="text-center p-4 bg-gray-900 rounded-lg">
                <div className="text-2xl font-bold text-green-400">2026</div>
                <div className="text-gray-400 text-sm">Graduation</div>
              </div>
            </div>
          </div>

          {/* Education & Location */}
          <div className="space-y-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-medium text-blue-400">Bachelor of Engineering</h5>
                  <p className="text-gray-300">Computer Science and Engineering</p>
                  <p className="text-gray-400">Yenepoya Institute of Technology</p>
                  <p className="text-gray-400">CGPA: 8.5 | Expected: July 2026</p>
                </div>
                <div>
                  <h5 className="text-lg font-medium text-purple-400">Pre University</h5>
                  <p className="text-gray-300">Physics, Chemistry, Mathematics, Biology</p>
                  <p className="text-gray-400">S.D.M PU College | Score: 90.83%</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Location</h4>
              </div>
              <p className="text-gray-300">Mangalore, Karnataka, India</p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Interests</h4>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Building intelligent, user-focused applications</li>
                <li>• Exploring generative AI and spatial reasoning</li>
                <li>• Hackathons and open-source contributions</li>
                <li>• Creating impactful tools in health-tech and education</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
