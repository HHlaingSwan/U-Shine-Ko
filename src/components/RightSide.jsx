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
    <div className="w-full h-full p-4 md:p-8 bg-gray-800 rounded-lg">
      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="flex flex-col h-full"
      >
        <TabsList className="mb-4 gap-12 p-4 shrink-0">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="artwork">Artwork</TabsTrigger>
          <TabsTrigger value="sharing">Sharing</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent
          value="about"
          className="grow overflow-y-auto hide-scrollbar"
        >
          <About />
        </TabsContent>
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
