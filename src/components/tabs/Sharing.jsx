import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { courseData } from "@/data/courses";
import { blogData } from "@/data/blogs";
import { Users, Clock, BarChart } from "lucide-react";

const Sharing = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [tabContent, setTabContent] = useState(null);

  // Function to determine the class names for the filter buttons (Cyan Active BG)
  const getTabClassName = (tabName) => {
    return cn(
      // Base Classes (Inactive State Styling)
      "px-4 py-2 bg-gray-700 text-gray-400 font-medium transition-colors duration-200 rounded-full text-sm hover:text-white hover:bg-gray-700",
      
      {
        // Active State Classes: Cyan Background, Dark Text
        "bg-cyan-400 text-gray-900 hover:bg-cyan-500 hover:text-gray-900": activeTab === tabName,
      }
    );
  };
  
  // Dynamic Content Setting (Titles are REMOVED from here)
  useEffect(() => {
    if (activeTab === "courses") {
      
      setTabContent(
        // Removed: <h2 className="text-2xl font-bold mb-4 ">My Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courseData.map((course) => (
            <Card
              key={course.id}
              className="bg-gray-800 border-gray-700 flex flex-col h-full 
                            hover:shadow-lg hover:border-cyan-400 
                           transition-all duration-300 ease-in-out"
            >
              <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl text-white">
                  {course.title}
                </CardTitle>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    course.isFinished
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {course.isFinished ? "Finished" : "Ongoing"}
                </span>
              </CardHeader>
              <CardContent className="flex flex-col grow pt-4">
                <div className="flex flex-col gap-2 text-sm text-gray-300 mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-cyan-400" />
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>Duration: {course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-cyan-400" />
                    <span>Students: {course.studentCount}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  Batch: {course.batch}
                </div>
              </CardContent>
              <CardFooter className="pt-4 mt-auto">
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    } else if (activeTab === "blog") {
      setTabContent(
        // Removed: <h2 className="text-3xl font-bold mb-4 text-cyan-400">From My Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogData.map((post) => (
            <Card
              key={post.id}
              className="bg-gray-800 border-gray-700 flex flex-col h-full overflow-hidden
                            hover:shadow-lg hover:border-cyan-400 
                           transition-all duration-300 ease-in-out"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl text-cyan-400">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col grow">
                <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-auto">{post.date}</p>
              </CardContent>
              <CardFooter className="pt-4">
                <Button
                  asChild
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
    }
  }, [activeTab]);

  // Determine the title dynamically based on the active tab
  const sectionTitle = activeTab === "courses" ? "My Courses" : "From My Blog";

  return (
    <div className="flex flex-col h-full">
      
      {/* --- NEW STATIC TITLE (Displayed Above Filter) --- */}
      <h2 className="text-2xl font-bold mb-4 ">{sectionTitle}</h2>
      {/* --- END NEW STATIC TITLE --- */}

      {/* Tab Filter (Now below the title) */}
      <div className="mb-6 flex justify-start gap-4"> 
        <Button
          variant="ghost"
          onClick={() => setActiveTab("courses")}
          className={getTabClassName("courses")}
        >
          Courses
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveTab("blog")}
          className={getTabClassName("blog")}
        >
          Blog
        </Button>
      </div>
      
      {/* Content */}
      <div className="grow overflow-y-auto hide-scrollbar">{tabContent}</div>
    </div>
  );
};

export default Sharing;