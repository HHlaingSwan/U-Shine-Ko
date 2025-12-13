import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import artworksData from "@/data/artworks";
import Divider from "@/components/ui/divider"; // Import Divider

const ArtworkPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artwork = artworksData.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="bg-gray-900 text-white h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Artwork Not Found</h1>
        <p className="text-xl">
          The artwork you are looking for does not exist.
        </p>
        <Button
          onClick={() => navigate(-1)}
          variant="secondary"
          className="mt-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
    );
  }

  const Section = ({ title, children }) => (
    <div className="w-full max-w-4xl flex gap-8">
      <Divider />
      <div className="grow">
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 text-white h-screen pt-20 px-8 pb-8 overflow-y-auto hide-scrollbar">
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        className="fixed top-8 left-8 z-50"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="flex flex-col items-center space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">{artwork.title}</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl text-center">
            {artwork.projectOverview}
          </p>

          {artwork.projectUrl && (
            <Button asChild variant="outline" className="text-black">
              <a
                href={artwork.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4 " /> Visit Project
              </a>
            </Button>
          )}
        </div>

        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="rounded-lg shadow-lg max-w-full h-auto"
        />

        {/* Client & Role Section */}
        <Section title="Project Info">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Role</h4>
              <p className="text-gray-300">{artwork.role}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Year</h4>
              <p className="text-gray-300">{artwork.year}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Team Members</h4>
              <p className="text-gray-300">{artwork.teamMembers}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Tools Used</h4>
              <div className="flex flex-wrap gap-2">
                {artwork.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Overview Section with Challenge & Solution */}
        <Section title="Project Overview & Narrative">
          <p className="text-gray-400 text-lg mb-8">
            {artwork.projectOverview}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-900/40 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">The Challenge</h4>
              <p className="text-gray-300">{artwork.challenge}</p>
            </div>
            <div className="bg-green-900/40 p-6 rounded-lg">
              <h4 className="text-2xl font-semibold mb-4">Solution & Impact</h4>
              <p className="text-gray-300">{artwork.solution}</p>
            </div>
          </div>
        </Section>

        {/* Core Features Section */}
        {artwork.coreFeatures && artwork.coreFeatures.length > 0 && (
          <Section title="Core UX Solutions & Key Product Features">
            <ul className="list-disc list-inside text-gray-400 text-lg space-y-2">
              {artwork.coreFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Section>
        )}

        {/* UX Process Section */}
        {artwork.uxProcess && (
          <Section title="The UX Process (Lean UX Approach)">
            <p className="text-gray-400 text-lg">{artwork.uxProcess}</p>
          </Section>
        )}

        {/* Detail Images Section */}
        {artwork.detailImages && artwork.detailImages.length > 0 && (
          <Section title="More Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artwork.detailImages.map((detailImg, index) => (
                <img
                  key={index}
                  src={detailImg}
                  alt={`${artwork.title} Detail ${index + 1}`}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
};

export default ArtworkPreview;
