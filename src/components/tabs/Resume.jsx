import React from "react";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";
import { experienceData, skillsData, educationData } from "@/data/resume";
import { Card } from "@/components/ui/card";

const Resume = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Resume</h2>
        <Button variant="secondary">
          <Download className="mr-2 h-4 w-4" /> Download CV
        </Button>
      </div>
      <div className="flex flex-col gap-12">
        {/* Work Experience Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-cyan-400">
            Experience Roadmap
          </h3>
          <div className="relative">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="flex gap-6 relative pb-8">
                <div className="relative flex flex-col items-center">
                <img
                    src={exp.logoUrl}
                    alt={`${exp.company} logo`}
                    // Increased size from w-8 h-8 to w-16 h-16 (adjust these values for desired size)
                    className="w-10 h-10 rounded-full ring-4 ring-gray-800 z-10 object-cover"
                />
                  {index < experienceData.length - 1 && (
                    <div className="w-px h-full bg-gray-700/50 mt-2"></div>
                  )}
                </div>
                <div className="pt-0.5">
                  <h4 className="text-lg font-semibold text-white">
                    {exp.position}
                  </h4>
                  <p className="text-cyan-400 text-md mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-cyan-400">Education</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {educationData.map((edu) => (
              <Card
                key={edu.id}
                className="bg-gray-800 border-gray-700 p-6 
                            hover:shadow-lg hover:border-cyan-400 
                           transition-all duration-300 ease-in-out"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 text-sm mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500">{edu.duration}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-cyan-400">Skills</h3>
          <div className="space-y-6">
            {skillsData.map((skill) => (
              <div key={skill.id}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-300">
                    {skill.skill}
                  </span>
                  <span className="text-sm font-medium text-gray-400">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-cyan-400 h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
