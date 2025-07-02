import { useGetCourseProgressQuery } from "@/features/api/courseProgressApi";
import { CheckCircle2, CirclePlay } from "lucide-react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function CourseProgress() {
  const params = useParams();
  const { data, isLoading, isError } = useGetCourseProgressQuery(
    params.courseId
  );
  const [currentLecture, setCurrentLecture] = useState(null);

  if (isLoading) return <p className="text-center mt-10">Loading..........</p>;
  if (isError || !data)
    return <p className="text-center mt-10">Failed to load course details</p>;

  const { courseDetails, progress, completed } = data.data;
  const { courseTitle, lectures } = courseDetails;

  const initialLecture =
    currentLecture || (courseDetails.lectures && courseDetails.lectures[0]);

  const isLectureCompleted = (lectureId) => {
    return progress.some((prog) => prog.lectureId === lectureId && prog.viewed);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-4 md:w-[90%] m-auto ">
      {/* Top */}
      <div className="flex justify-between items-center mb-2">
        <div></div>
        <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded shadow">
          Completed
        </button>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row gap-6 min-h-[500px]">
        {/* Left: Video + Title */}
        <div className="md:w-[60%] bg-white dark:bg-gray-800 rounded shadow p-4">
          <h2 className="text-2xl font-bold text-left mb-4">{courseTitle}</h2>

          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow text-left">
            {`Lecture ${
              courseDetails.lectures.findIndex(
                (lec) => lec._id === (currentLecture?._id || initialLecture._id)
              ) + 1
            }: ${currentLecture?.lectureTitle || initialLecture.lectureTitle}`}
          </div>
          <video
            src={currentLecture?.videoUrl || initialLecture.videoUrl}
            className="w-full"
            controls
          />
        </div>

        {/* Right: Lecture List */}
        <div className="md:w-[40%] bg-white dark:bg-gray-800 rounded shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Course Lecture</h3>
          <div className="space-y-4">
            {lectures.map((lecture, idx) => (
              <div
                key={lecture._id}
                onClick={() => setCurrentLecture(lecture)}
                className="flex items-center justify-between p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
              >
                <span className="font-medium">{lecture.lectureTitle}</span>
                <span className="flex items-center gap-2">
                  {isLectureCompleted(lecture._id) ? (
                    <CheckCircle2 size={20} className="text-green-600" />
                  ) : (
                    <CirclePlay size={20} className="text-blue-500" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseProgress;
