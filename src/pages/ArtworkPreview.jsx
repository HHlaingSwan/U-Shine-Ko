import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import artworksData from "@/data/artworks";

const ArtworkPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const artwork = artworksData.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="bg-gray-950 text-white min-h-screen p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Artwork Not Found</h1>
        <p className="text-lg text-gray-400">
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

  return (
    <div className="bg-gray-950 text-white min-h-screen antialiased">
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        className="fixed top-6 left-6 z-50 !text-white bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      {/* Header */}
      <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent z-10" />
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center p-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2">
            {artwork.title}
          </h1>
          <p className="text-xl text-gray-300 font-light">{artwork.year}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-8 md:p-12 space-y-24">
        {/* Overview & Project Link */}
        <section className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-400">
              {artwork.projectOverview}
            </p>
          </div>
          {artwork.projectUrl && (
            <Button asChild variant="outline" className="text-black mt-4 md:mt-0 flex-shrink-0">
              <a
                href={artwork.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Project
              </a>
            </Button>
          )}
        </section>

        {/* Project Info: Role & Tools */}
        <section>
          <div className="grid md:grid-cols-3 gap-8 border-t border-gray-800 pt-12">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Role</h3>
              <p className="text-gray-400">{artwork.role}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {artwork.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-4">The Challenge</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{artwork.challenge}</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Solution & Impact</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{artwork.solution}</p>
            </div>
        </section>

        {/* Core Features */}
        {artwork.coreFeatures && artwork.coreFeatures.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6 list-inside text-gray-400 text-lg">
              {artwork.coreFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-400 mr-3 mt-1">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* UX Process */}
        {artwork.uxProcess && (
          <section>
             <h2 className="text-3xl font-bold mb-4 text-center">UX Process</h2>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto text-center">{artwork.uxProcess}</p>
          </section>
        )}

        {/* Detail Images */}
        {artwork.detailImages && artwork.detailImages.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">More Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artwork.detailImages.map((detailImg, index) => (
                <img
                  key={index}
                  src={detailImg}
                  alt={`${artwork.title} Detail ${index + 1}`}
                  className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ArtworkPreview;
