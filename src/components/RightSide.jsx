import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Artwork from "./tabs/Artwork";
import Hiring from "./tabs/Hiring";
import Contact from "./tabs/Contact";

const RightSide = () => {
  return (
    <div className="w-full h-full p-4 md:p-8 bg-gray-800 rounded-lg">
      <Tabs defaultValue="about" className="flex flex-col h-full">
        <TabsList className="mb-4 gap-12">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="artwork">Artwork</TabsTrigger>
          <TabsTrigger value="hiring">Hiring</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className=" overflow-y-auto">
          <About />
        </TabsContent>
        <TabsContent value="resume" className=" overflow-y-auto">
          <Resume />
        </TabsContent>
        <TabsContent value="artwork" className=" overflow-y-auto">
          <Artwork />
        </TabsContent>
        <TabsContent value="hiring" className=" overflow-y-auto">
          <Hiring />
        </TabsContent>
        <TabsContent value="contact" className=" overflow-y-auto">
          <Contact />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RightSide;
