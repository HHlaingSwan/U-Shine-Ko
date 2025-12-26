import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Data } from "@/data/brandingLogo";

const DesignSystemCaseStudy = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const caseStudyData = Data.find((item) => item.id.toString() === id);

  if (!caseStudyData) {
    return (
      <div className="bg-gray-950 text-white min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Case study not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 text-white min-h-screen antialiased">
      {/* Back Button */}
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        className="fixed top-6 left-6 z-50 text-white bg-black/50 backdrop-blur-sm border-none hover:bg-black/70 hover:text-cyan-400 transition-colors duration-200"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      {/* Cover Image with Overlay */}
      <header className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        {/* Cover Image */}
        <img
          src={caseStudyData.imageUrl}
          alt={caseStudyData.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/80 to-transparent z-10" />

        {/* Title and Subtitle Overlay */}
        <div className="relative z-20 w-full px-8 md:px-16 pb-16 md:pb-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            {caseStudyData.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-light">
            {caseStudyData.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-24">
        {/* Content Blocks */}
        <section className="space-y-16 md:space-y-24 mb-16 md:mb-24">
          {caseStudyData.contentBlocks.map((block, index) => (
            <div
              key={block.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-auto rounded-lg shadow-2xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  {block.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Logo Display Section */}
        {caseStudyData.logos && caseStudyData.logos.length > 0 && (
          <section className="border-t border-gray-800 pt-16 md:pt-24">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Logo Display
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                Logo variations designed for different contexts and backgrounds
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {caseStudyData.logos.map((logo) => (
                <div key={logo.id} className="space-y-6">
                  {/* Logo Title and Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                      {logo.title}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {logo.description}
                    </p>
                  </div>

                  {/* Logo Variations Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Light Background */}
                    <div className="bg-white rounded-lg p-6 md:p-8 flex items-center justify-center min-h-[180px] md:min-h-[200px] shadow-lg">
                      <img
                        src={logo.images.light}
                        alt={`${logo.title} on light background`}
                        className="max-w-full max-h-24 md:max-h-32 object-contain"
                      />
                    </div>

                    {/* Dark Background */}
                    <div className="bg-gray-900 rounded-lg p-6 md:p-8 flex items-center justify-center min-h-[180px] md:min-h-[200px] shadow-lg border border-gray-800">
                      <img
                        src={logo.images.dark}
                        alt={`${logo.title} on dark background`}
                        className="max-w-full max-h-24 md:max-h-32 object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default DesignSystemCaseStudy;
