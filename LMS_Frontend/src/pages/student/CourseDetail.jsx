import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Lock } from "lucide-react";
import ReactPlayer from "react-player";
import BuyCourseButton from "@/components/ui/BuyCourseButton";

function CourseDetail() {
  const puchasedCourse = false;
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <Card className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl mb-8 shadow-md">
          <CardContent className="p-0">
            <h1 className="text-3xl font-bold mb-2">
              Mastering Next.js: Full-Stack Web Development
            </h1>
            <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">
              Build Scalable, Modern Web Apps with React & Next.js
            </p>
            <p className="text-sm mb-1">
              Created By{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Patel MernStack
              </span>
            </p>
            <p className="text-sm mb-1 text-gray-600 dark:text-gray-400">
              Last updated: 2024-10-20
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Students enrolled: 1
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Description & Course Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              This comprehensive course is designed for developers who want to
              learn how to build robust, production-ready web applications using
              Next.js. You will master server-side rendering, static site
              generation, API routes, dynamic routing, and much more. By the end
              of this course, you will be able to create SEO-friendly, scalable,
              and fast web applications with ease.
            </p>

            <Card className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold mb-4">Course Content</h3>
                <ul className="space-y-3">
                  {[1, 2, 3].map((lecture, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      {false ? <PlayCircle size={14} /> : <Lock size={14} />}
                      <p>Lecture title</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Video and Pricing */}
          <Card className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-md">
            <CardContent className="p-0">
              <div className="aspect-video mb-4 rounded-md overflow-hidden">
                <ReactPlayer
                  url="/video/intro.mp4"
                  controls
                  width="100%"
                  height="100%"
                />
              </div>
              <p className="font-medium mb-1">Introduction to Next.js</p>
              <p className="text-lg font-semibold mb-4">239₹</p>
              {puchasedCourse ? (
                <Button className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Continue
                </Button>
              ) : (
                <BuyCourseButton/>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
