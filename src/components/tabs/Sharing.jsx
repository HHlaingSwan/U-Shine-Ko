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

  useEffect(() => {
    if (activeTab === "courses") {
      setTabContent(
        <>
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courseData.map((course) => (
              <Card
                key={course.id}
                className="bg-gray-800 border-gray-700 flex flex-col h-full 
                            hover:shadow-lg hover:border-cyan-400 
                           transition-all duration-300 ease-in-out"
              >
                <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl text-cyan-400">
                    {course.title}
                  </CardTitle>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold 
                                    ${
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
        </>
      );
    } else if (activeTab === "blog") {
      setTabContent(
        <>
          <h2 className="text-2xl font-bold mb-4">From My Blog</h2>
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
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                Read More
                </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      );
    }
  }, [activeTab]);

  const getTabClassName = (tabName) => {
    return cn(
      "p-0 text-gray-400 rounded-none bg-transparent hover:bg-transparent",
      {
        "text-white border-b-2 border-yellow-400": activeTab === tabName,
      }
    );
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-6 flex justify-start gap-8">
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
      <div>{tabContent}</div>
    </div>
  );
};

export default Sharing;
