import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
    ArrowLeft, 
    ExternalLink, 
    Eye, 
    ArrowLeftCircle, 
    ArrowRightCircle,
    X // Icon for closing the modal
} from "lucide-react"; 
import artworksData from "@/data/artworks"; 

// =========================================================================
// Modal/Lightbox Component (XL Icons with White Hover Background)
// =========================================================================

const DetailModal = ({ isOpen, imageSrc, onClose, onPrev, onNext, hasPrev, hasNext }) => {
    if (!isOpen) return null;

    // Class for the large, circular navigation buttons:
    // Default: Translucent Cyan background, White icon text.
    // Hover: White background, Cyan icon text for contrast.
    const NavButtonClass = "absolute top-1/2 -translate-y-1/2 p-4 rounded-full opacity-90 hover:opacity-100 transition-opacity z-[101] bg-cyan-600/80 hover:bg-white";
    const NavIconClass = "h-40 w-40 text-white group-hover:text-cyan-600"; // Use group-hover utility

    return (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
            
            {/* Close Button */}
            <Button
                onClick={onClose}
                variant="ghost"
                className="absolute top-4 right-4 text-white hover:text-cyan-400 p-2 z-[101] backdrop-blur-sm"
            >
                <X className="h-8 w-8" />
            </Button>

            {/* Navigation Buttons (Left/Previous) - H-40 W-40 with White Hover */}
            {hasPrev && (
                <Button
                    onClick={onPrev}
                    // Added 'group' class to the button so we can style the child icon on hover
                    className={`${NavButtonClass} left-4 group`}
                >
                    <ArrowLeftCircle className={NavIconClass} />
                </Button>
            )}

            {/* Navigation Buttons (Right/Next) - H-40 W-40 with White Hover */}
            {hasNext && (
                <Button
                    onClick={onNext}
                    // Added 'group' class to the button so we can style the child icon on hover
                    className={`${NavButtonClass} right-4 group`}
                >
                    <ArrowRightCircle className={NavIconClass} />
                </Button>
            )}

            {/* Image Container */}
            <div className="relative max-w-full max-h-full mx-16">
                <img
                    src={imageSrc}
                    alt="Design Detail Screen"
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

// =========================================================================
// Main ArtworkPreview Component
// =========================================================================

const ArtworkPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Find the artwork data
  const artwork = artworksData.find((art) => art.id === parseInt(id));
  
  // 2. STATE MANAGEMENT FOR LIGHTBOX/MODAL
  const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  // Helper to check if Challenge/Solution section should display
  const shouldDisplayChallengeSolution = artwork && (artwork.challenge || artwork.solution);

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
              className="mt-8 bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
            </Button>
        </div>
    );
  }
  
  // Custom classes
  const BackButtonClass = "fixed top-6 left-6 z-50 text-white bg-black/50 backdrop-blur-sm border-none hover:bg-black/70 hover:text-cyan-400 transition-colors duration-200";
  const ProjectLinkHeaderClass = "fixed top-6 right-6 z-50 bg-black/50 backdrop-blur-sm border-none text-white hover:bg-black/70 hover:text-cyan-400 transition-colors duration-200";

  // Lightbox functions
  const openDetailView = (index) => {
    setCurrentImageIndex(index);
    setIsDetailViewOpen(true);
  };

  const closeDetailView = () => {
    setIsDetailViewOpen(false);
  };
  
  const goToNextImage = () => {
    if (artwork.detailImages && currentImageIndex < artwork.detailImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (artwork.detailImages && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };


  return (
    <div className="bg-gray-950 text-white min-h-screen antialiased">
      
      {/* 1. Back Button */}
      <Button
        onClick={() => navigate(-1)}
        variant="secondary"
        className={BackButtonClass} 
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      {/* 2. Visit Project Button */}
      {artwork.projectUrl && (
        <Button
          asChild
          className={ProjectLinkHeaderClass}
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
          {/* Note: artwork.year is displayed here in the header too, which is okay */}
          <p className="text-xl text-gray-300 font-light">{artwork.year}</p>
        </div>
      </header>

      {/* Main Content (Center Alignment) */}
      <main className="max-w-6xl mx-auto p-8 md:p-12 space-y-12">
        
        {/* Project Overview (Center Alignment) */}
        <section className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-lg text-gray-400">{artwork.projectOverview}</p>
        </section>

        {/* Divider */}
        <div className="border-b border-gray-800 my-12"></div>

        {/* Project Info: Role, Resources, Year, Team Members, Clients */}
        <section className="text-center"> 
          {/* New 5-Column Grid for Project Metadata (2 columns for team members) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8"> 

            {/* 1. Role */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Role</h3>
              {/* Data color change to cyan */}
              <p className="text-cyan-400 font-medium">{artwork.role}</p>
            </div>
            
            {/* 2. Year */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Year</h3>
              {/* Data color change to cyan */}
              <p className="text-cyan-400 font-medium">{artwork.year}</p>
            </div>
            
            {/* 3. Clients (Verification of display) */}
            <div className="col-span-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Clients</h3>
              {/* Data color change to cyan. If it wasn't displaying before, ensure the 'artwork.clients' field exists in your data source. */}
              <p className="text-cyan-400 font-medium">{artwork.client}</p>
            </div>

            {/* 4. Team Members */}
            <div className="col-span-2"> {/* Takes 2 columns to fit longer text/names */}
              <h3 className="text-xl font-semibold mb-2 text-gray-300">Team Members</h3>
              {/* Conditional rendering and data color change to cyan */}
                <p className="text-cyan-400 font-medium">{artwork.teamMembers}</p>
             
            </div>

          </div>
          
          {/* Resources Section */}
          {artwork.expertise && artwork.expertise.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2 text-gray-300">
                Resources / Tools Used
              </h3>
              <div className="flex flex-wrap gap-2 justify-center"> 
                {artwork?.expertise?.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Conditional Divider for Challenge & Solution */}
        {shouldDisplayChallengeSolution && (
            <div className="border-b border-gray-800 my-12"></div>
        )}

        {/* Conditional Challenge & Solution Cards */}
        {shouldDisplayChallengeSolution && (
            <section className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Challenge Card: Display only if artwork.challenge exists */}
                {artwork.challenge && (
                    <Card className="bg-orange-900/40 border-orange-700/50 p-8 rounded-lg h-full hover:scale-[1.02] hover:shadow-lg hover:border-orange-400 transition-all duration-300 ease-in-out">
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
                )}
                
                {/* Solution Card: Display only if artwork.solution exists */}
                {artwork.solution && (
                    <Card className="bg-green-900/40 border-green-700/50 p-8 rounded-lg h-full hover:scale-[1.02] hover:shadow-lg hover:border-green-400 transition-all duration-300 ease-in-out">
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
                    </Card>
                )}
            </section>
        )}
        
        {/* Conditional Sections (Core Features, UX Process) */}
        
        {artwork.coreFeatures && artwork.coreFeatures.length > 0 && (
          <div className="border-b border-gray-800 my-12"></div>
        )}

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

        {artwork.uxProcess && artwork.uxProcess.length > 0 && (
          <div className="border-b border-gray-800 my-12"></div>
        )}

        {artwork.uxProcess && artwork.uxProcess.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Design Process
            </h2>
            <div className="relative max-w-4xl mx-auto"> 
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

        {/* 4. Detail Images with Interactive Hover */}
        <section>
          {artwork.detailImages && artwork.detailImages.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8 text-center">
                Design Screens
              </h2>
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {artwork.detailImages.map((detailImg, index) => (
                  <div key={index} className="break-inside-avoid relative group">
                    <img
                      src={detailImg}
                      alt={`${artwork.title} Detail ${index + 1}`}
                      className="rounded-lg shadow-2xl w-full h-auto object-cover transition-all duration-300 ease-in-out"
                    />
                    
                    {/* Interactive Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                        
                        {/* View Detail Button (Opens Modal) */}
                        <Button 
                            variant="secondary" 
                            className="bg-cyan-600/80 text-white hover:bg-cyan-600 transition-colors mb-4"
                            onClick={() => openDetailView(index)}
                        >
                            <Eye className="mr-2 h-4 w-4" /> View Detail
                        </Button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
        
      </main>

      {/* 5. Detail View Modal/Lightbox */}
      <DetailModal
          isOpen={isDetailViewOpen}
          imageSrc={artwork.detailImages ? artwork.detailImages[currentImageIndex] : ""}
          onClose={closeDetailView}
          onPrev={goToPreviousImage}
          onNext={goToNextImage}
          hasPrev={currentImageIndex > 0}
          hasNext={artwork.detailImages && currentImageIndex < artwork.detailImages.length - 1}
      />
    </div>
  );
};

export default ArtworkPreview;