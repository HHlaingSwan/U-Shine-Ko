import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import artworksData from "@/data/artworks"; // Import the new data

const Artwork = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [filteredArtworks, setFilteredArtworks] = useState(artworksData);

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredArtworks(artworksData);
    } else {
      const filtered = artworksData.filter(
        (artwork) => artwork.category === activeTab
      );
      setFilteredArtworks(filtered);
    }
  }, [activeTab]); 

  // Function to determine the class names for the filter buttons
  const getTabClassName = (tabName) => {
    return cn(
      // Base Classes: Default look for inactive buttons
      "px-4 py-2 text-gray-400 bg-gray-700 font-medium transition-colors duration-200 rounded-lg text-sm hover:text-white hover:bg-gray-700 rounded-full",
      
      {
        // Active State Classes: Cyan Background, Dark Text
        "bg-cyan-400 text-gray-900 hover:bg-cyan-500 hover:text-gray-900": activeTab === tabName,
      }
    );
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4">My Artwork</h2>
      <div className="mb-6 flex justify-start gap-4 ">
        <Button
          variant="ghost"
          onClick={() => setActiveTab("all")}
          className={getTabClassName("all")}
        >
          All
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab("web")}
          className={getTabClassName("web")}
        >
          Web Design
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab("mobile")}
          className={getTabClassName("mobile")}
        >
          Mobile App
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab("brandingLogo")}
          className={getTabClassName("brandingLogo")}
        >
          Branding & Logo
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab("designSystem")}
          className={getTabClassName("designSystem")}
        >
          Design System{" "}
        </Button>
      </div>
      <div className="grow overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtworks.map((artwork) => (
            <Card 
              key={artwork.id} 
              className="relative group overflow-hidden border-0" 
            >
              <CardContent className="p-0 h-full">
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  // Aspect ratio 3:2 (width:height)
                  className="w-full h-full object-cover aspect-[3/2]" 
                />
                
                {/* --- DEFAULT CARD STATE: Tag Button Top Right --- */}
                {artwork.tag && (
                    <div className="absolute top-3 right-3 z-10">
                        <span 
                            className="inline-block px-3 py-1 text-xs font-medium 
                                       text-cyan-400 
                                       bg-black/80 backdrop-blur-sm rounded-md transition-opacity duration-300"
                        >
                            {artwork.tag}
                        </span>
                    </div>
                )}
                
                {/* --- REFINED HOVER OVERLAY: Left-Aligned Title, Centered Cyan Button --- */}
                <div 
                  className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                             flex flex-col justify-end p-6" 
                >
                    <div className="flex flex-col items-start space-y-4 w-full"> 
                        
                        {/* Title */}
                        <h3 className="text-1xl font-bold text-white leading-snug text-left">
                            {artwork.title}
                        </h3>

                        {/* Preview Button (Updated for Cyan color and Centered alignment) */}
                        <Button 
                            asChild 
                            variant="secondary"
                            // CHANGE: text-cyan-400 for color, justify-center for alignment
                            // Also changed background color to better fit a cyan theme for primary actions
                            className="bg-white text-black hover:bg-cyan-600 transition-colors mt-2 w-full justify-center" 
                        >
                            <Link to={`/artwork/${artwork.id}`}>
                                <Eye className="mr-2 h-4 w-4" /> Preview
                            </Link>
                        </Button>
                    </div>
                </div>
                {/* --- END REFINED HOVER OVERLAY --- */}

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artwork;