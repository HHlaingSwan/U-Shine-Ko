import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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
import { Users, Clock, BarChart, Calendar, Hourglass, Layers, BookOpen } from "lucide-react";

// Scroll Indicator Component
const ScrollIndicator = ({ scrollContainerRef }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef?.current;
    if (!container) return;

    const updateScrollProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    container.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress(); // Initial calculation

    // Also update on resize
    const resizeObserver = new ResizeObserver(updateScrollProgress);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', updateScrollProgress);
      resizeObserver.disconnect();
    };
  }, [scrollContainerRef]);

  return (
    <div className="absolute right-2 top-0 bottom-0 w-1 bg-gray-700/30 rounded-full overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full bg-white rounded-full transition-all duration-150 ease-out"
        style={{
          height: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};

const Sharing = () => {
  const [activeTab, setActiveTab] = useState("courses");
  const [tabContent, setTabContent] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const scrollContainerRef = useRef(null);

  // Function to determine the class names for the filter buttons (Cyan Active BG)
  const getTabClassName = (tabName) => {
    return cn(
      // Base Classes (Inactive State Styling)
      "px-4 py-2 bg-gray-700 text-gray-400 font-medium transition-colors duration-200 rounded-full text-sm hover:text-white hover:bg-gray-700",

      {
        // Active State Classes: Cyan Background, Dark Text
        "bg-cyan-400 text-gray-900 hover:bg-cyan-500 hover:text-gray-900":
          activeTab === tabName,
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
            <Dialog key={course.id}>
              <Card
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
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Time: {course.time}</span>
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
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                    >
                      View Details
                    </Button>
                  </DialogTrigger>
                </CardFooter>
              </Card>
              {selectedCourse && (
                <DialogContent className="bg-gray-900 text-white border-gray-700 max-w-2xl max-h-[90vh] flex flex-col p-0">
                  {/* Fixed Header Section */}
                  <div className="flex-shrink-0 px-6 pt-4 pb-4 border-b border-gray-700">
                    <DialogHeader className="space-y-2">
                      <DialogTitle className="text-3xl font-bold text-white">
                        {selectedCourse.title}
                      </DialogTitle>
                      {selectedCourse.subtitle && (
                        <DialogDescription className="text-cyan-400 text-sm">
                          {selectedCourse.subtitle}
                        </DialogDescription>
                      )}
                    </DialogHeader>
                    
                  
                  </div>

                  {/* Scrollable Course Curriculum Section with Scroll Indicator */}
                  <div className="flex-1 overflow-y-auto px-6 py-6 relative" ref={scrollContainerRef}>

                      {/* Course Information Cards */}
                      <div className="grid grid-cols-2 gap-4 mt-0 pb-6 border-b border-gray-700">
                      {/* Start Date Card */}
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">START DATE</span>
                        </div>
                        <p className="text-white font-medium">{selectedCourse.startDate || 'TBD'}</p>
                      </div>
                      
                      {/* Duration Card */}
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Hourglass className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">DURATION</span>
                        </div>
                        <p className="text-white font-medium">{selectedCourse.duration}</p>
                      </div>
                      
                      {/* Schedule Card */}
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Layers className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">SCHEDULE</span>
                        </div>
                        <p className="text-white font-medium">{selectedCourse.schedule || 'TBD'}</p>
                      </div>
                      
                      {/* Time Card */}
                      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Clock className="w-5 h-5 text-cyan-400" />
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">TIME</span>
                        </div>
                        <p className="text-white font-medium">{selectedCourse.time}</p>
                      </div>
                    </div>
                    <ScrollIndicator scrollContainerRef={scrollContainerRef} />

                    

                    <div className="flex items-center gap-3 mt-6 mb-6">
                      <BookOpen className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-xl font-semibold text-cyan-400">Course Curriculum</h3>
                    </div>
                    <div className="space-y-6 pr-4">
                      {selectedCourse.outline.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="bg-gray-700 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">
                              MOD {index + 1}
                            </span>
                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          </div>
                          <ul className="list-none space-y-2 pl-12">
                            {item.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="text-gray-300 text-sm flex items-start">
                                <span className="text-cyan-400 mr-2">•</span>
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fixed Footer Section */}
                  <DialogFooter className="flex-shrink-0 px-6 py-4 border-t border-gray-700">
                    <DialogClose asChild>
                      <Button className="bg-gray-700 hover:bg-gray-600 text-white">
                        Close Details
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              )}
            </Dialog>
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
  }, [activeTab, selectedCourse]);

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