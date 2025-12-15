import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
        className="fixed top-6 left-6 z-50 text-white bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      {/* Header */}
      <header className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/60 to-transparent z-10" />
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
      <main className="max-w-6xl mx-auto p-8 md:p-12 space-y-12">
        {/* Overview & Project Link */}
        <section className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-400">{artwork.projectOverview}</p>
          </div>
          {artwork.projectUrl && (
            <Button
              asChild
              variant="outline"
              className="text-black mt-4 md:mt-0 shrink-0"
            >
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

        {/* Divider */}
        <div className="border-b border-gray-800 my-12"></div>

        {/* Project Info: Role & Tools */}
        <section>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Role</h3>
              <p className="text-gray-400">{artwork.role}</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">
              Expertise
              </h3>
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

        {/* Divider */}
        <div className="border-b border-gray-800 my-12"></div>

        {/* Challenge & Solution */}
        <section className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="bg-orange-900/40 border-orange-700/50 p-8 rounded-lg h-full hover:scale-[1.02] hover:shadow-lg hover:border-cyan-400 transition-all duration-300 ease-in-out">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl font-bold text-white">
                The Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-300 text-lg leading-relaxed">
                {artwork.challenge}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-green-900/40 border-green-700/50 p-8 rounded-lg h-full hover:scale-[1.02] hover:shadow-lg hover:border-cyan-400 transition-all duration-300 ease-in-out">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl font-bold text-white">
                Solution & Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-300 text-lg leading-relaxed">
                {artwork.solution}
              </p>
            </CardContent>
          </Card>{" "}
        </section>
        {/* Divider - Conditional based on if Core Features exists */}
        {artwork.coreFeatures && artwork.coreFeatures.length > 0 && (
          <div className="border-b border-gray-800 my-12"></div>
        )}

        {/* Core Features */}
        {artwork.coreFeatures && artwork.coreFeatures.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {artwork.coreFeatures.map((feature, index) => {
                return (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 flex flex-col hover:scale-[1.02] hover:shadow-lg hover:border-cyan-400 transition-all duration-300 ease-in-out"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl text-cyan-400">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    {feature.description && (
                      <CardContent>
                        <p className="text-gray-400">{feature.description}</p>
                      </CardContent>
                    )}
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {/* Divider - Conditional based on if UX Process exists */}
        {artwork.uxProcess && artwork.uxProcess.length > 0 && (
          <div className="border-b border-gray-800 my-12"></div>
        )}

        {/* UX Process */}
        {artwork.uxProcess && artwork.uxProcess.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Process
            </h2>
            <div className="relative max-w-6xl mx-auto">
              {artwork.uxProcess.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-8 relative pb-12"
                >
                  {/* Timeline Gutter */}
                  <div className="relative flex flex-col items-center shrink-0">
                    {/* The actual line, absolutely positioned */}
                    {index < artwork.uxProcess.length - 1 && (
                      <div className="absolute top-0 bottom-0 w-px bg-gray-700/50 z-0 mt-6 mb-6"></div>
                    )}
                    {/* Number Circle (relative to ensure it's above the line) */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-cyan-900/50 text-cyan-400 font-bold text-xl ring-8 ring-gray-950">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2.5">
                    <h4 className="text-xl font-semibold mb-2 text-white">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Divider - Conditional based on if Detail Images exists */}
        {artwork.detailImages && artwork.detailImages.length > 0 && (
          <div className="border-b border-gray-800 my-12"></div>
        )}

        {/* Detail Images */}
        {artwork.detailImages && artwork.detailImages.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">
              More Details
            </h2>
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {artwork.detailImages.map((detailImg, index) => (
                <div key={index} className="break-inside-avoid">
                  <img
                    src={detailImg}
                    alt={`${artwork.title} Detail ${index + 1}`}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover hover:scale-[1.03] hover:shadow-xl transition-all duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default ArtworkPreview;
