import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";

function CreateLecture() {
  const navigate = useNavigate();
  const params = useParams();
  const courseId = params.courseId;
  const isLoading = false;

  const [lectureTitle, setLectureTitle] = useState("");

  const createLectureHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-6">Add Lecture</h1>

      <form
        onSubmit={createLectureHandler}
        className="max-w-xl bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 space-y-6"
      >
        <div>
          <label htmlFor="title" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={lectureTitle}
            onChange={(e) => setLectureTitle(e.target.value)}
            placeholder="Enter course title"
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex gap-4">
          <Button
            type="button"
            onClick={() => navigate("/admin/course/courseId")}
          >
            Back
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" />
                Please wait...
              </>
            ) : (
              "Add Lecture"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default CreateLecture;
