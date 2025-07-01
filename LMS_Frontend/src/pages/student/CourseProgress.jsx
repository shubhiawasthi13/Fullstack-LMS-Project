import React, { useState } from "react";
import ReactPlayer from "react-player";

function CourseProgress() {
  // Simulated lecture data (replace with API data)
  const lectures = [
    {
      id: 1,
      title: "Lecture 1: Introduction",
      description: "An introduction to the course",
      videoUrl: "/video/intro.mp4",
      progress: 100,
    },
    {
      id: 2,
      title: "Lecture 2: Basics",
      description: "Understanding the basics",
      videoUrl: "/video/intro.mp4",
      progress: 50,
    },
    {
      id: 3,
      title: "Lecture 3: Advanced Concepts",
      description: "Diving deeper",
      videoUrl: "/video/intro.mp4",
      progress: 20,
    },
  ];

  const [selectedLecture, setSelectedLecture] = useState(lectures[0]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Video Player */}
        <div className="lg:col-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow">
          <ReactPlayer
            url={selectedLecture.videoUrl}
            controls
            width="100%"
            height="400px"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{selectedLecture.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedLecture.description}
            </p>
          </div>
        </div>

        {/* Right: Lecture List */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow max-h-[600px] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">Lectures</h3>
          {lectures.map((lecture) => (
            <div
              key={lecture.id}
              className={`mb-3 p-3 rounded-md cursor-pointer transition ${
                selectedLecture.id === lecture.id
                  ? "bg-blue-100 dark:bg-blue-700"
                  : "hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedLecture(lecture)}
            >
              <h4 className="text-lg font-medium">{lecture.title}</h4>
              <div className="h-2 w-full bg-gray-300 dark:bg-gray-700 rounded mt-1">
                <div
                  className="h-2 bg-blue-600 rounded"
                  style={{ width: `${lecture.progress}%` }}
                />
              </div>
              <p className="text-xs text-right text-gray-600 dark:text-gray-400 mt-1">
                {lecture.progress}% completed
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseProgress;
