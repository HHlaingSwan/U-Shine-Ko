import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee";
import { specializations, feedback, clients, workflowData } from "@/data/about";

const About = () => {
  return (
    <div className="space-y-12">
      {/* Bio section */}
      <div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 mb-4">
          I'm a visual designer with over 5 years of hands-on experience. I'm
          passionate about psychology and the manipulation of humans along with
          the aesthetics of arts.
        </p>
      </div>

      {/* Specializations section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-cyan-400">
          What I Specialize In
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  {/* Render the icon component directly */}
                  {spec.icon && <spec.icon className="w-8 h-8 text-cyan-400" />}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {spec.title}
                  </h4>
                  <p className="text-sm text-gray-400">{spec.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-cyan-400 text-center">
          How I Work
        </h3>
        <ol className="relative border-l   border-gray-700">
          {workflowData.map((step, index) => (
            <li key={step.id} className="mb-10  ml-8">
              <span className="absolute  flex items-center justify-center w-8 h-8 bg-cyan-900 rounded-full -left-4 ring-8 ring-gray-900">
                <span className="text-cyan-400 text-sm font-bold">
                  {step.id}
                </span>
              </span>
              <h4 className="flex items-center mb-1 text-lg font-semibold text-white">
                {step.title}
              </h4>
              <p className="mb-2 text-base font-normal text-gray-400">
                {step.description}
              </p>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>

      {/* Co-worker Feedback section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-cyan-400">
          Co-worker Feedback
        </h3>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s]">
            {feedback.map((item, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 w-90 mx-4 p-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.position}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm text-gray-300 italic">
                  "{item.feedback}"
                </blockquote>
              </Card>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Client Logos section */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-cyan-400">Trusted By</h3>
        <div className="relative">
          <Marquee pauseOnHover className="[--duration:60s]">
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center mx-8"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  // Added rounded-full, w-20, and h-20 for circle shape and fixed size
                  className="h-20 w-20 rounded-full object-cover opacity-80" 
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      
    </div>
  );
};

export default About;
