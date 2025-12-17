import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Artwork from "./tabs/Artwork";
import Sharing from "./tabs/Sharing";
import Contact from "./tabs/Contact";

const RightSide = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  // Sync tab state from URL hash on initial load and hash changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setActiveTab(hash);
    } else {
      setActiveTab("about");
    }
  }, [location.hash]);

  const handleTabChange = (value) => {
    setActiveTab(value);
    navigate(`#${value}`);
  };

  return (
    <div className="w-full h-full p-8 md:px-16 md:py-8 bg-gray-800 rounded-lg">
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="flex flex-col h-full "
    >
      <TabsList
        // --- REFINED CLASSES START ---
        // 1. Left Align: Use 'justify-start' to push items to the left.
        // 2. Cyan Active BG: Use 'data-[state=active]:bg-cyan-500' on the list to define the active color.
        className="
          mb-8
          bg-gray-800 
          text-slate-300 
          gap-4 
          p-0
          shrink-0 
          justify-start 
          data-[state=active]:bg-cyan-500 
          data-[state=active]:text-white
        "
      >
        <TabsTrigger
          value="about"
          // Ensure triggers can inherit the active state background
          className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white bg-gray-700 rounded-full"
        >
          About
        </TabsTrigger>
        <TabsTrigger
          value="resume"
          className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white bg-gray-700 rounded-full"
        >
          Resume
        </TabsTrigger>
        <TabsTrigger
          value="artwork"
          className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white bg-gray-700 rounded-full"
        >
          Artwork
        </TabsTrigger>
        <TabsTrigger
          value="sharing"
          className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white bg-gray-700 rounded-full"
        >
          Sharing
        </TabsTrigger>
        <TabsTrigger
          value="contact"
          className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white bg-gray-700 rounded-full"
        >
          Contact
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="about"
        className="grow overflow-y-auto hide-scrollbar"
      >
        <About />
      </TabsContent>
      {/* ... (Other TabsContent remain the same) ... */}
      <TabsContent
        value="resume"
        className="grow overflow-y-auto hide-scrollbar"
      >
        <Resume />
      </TabsContent>
      <TabsContent
        value="artwork"
        className="grow overflow-y-auto hide-scrollbar"
      >
        <Artwork />
      </TabsContent>
      <TabsContent
        value="sharing"
        className="grow overflow-y-auto hide-scrollbar"
      >
        <Sharing />
      </TabsContent>
      <TabsContent
        value="contact"
        className="grow overflow-y-auto hide-scrollbar"
      >
        <Contact />
      </TabsContent>
    </Tabs>
  </div>
  );
};

export default RightSide;
