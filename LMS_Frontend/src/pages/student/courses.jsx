import React, { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton";
import Course from './course';

function Courses() {
  const [isLoading, setIsLoading] = useState(true);




  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
        Our Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {(isLoading ? new Array(8).fill(null) : courses).map((course, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition">
            {isLoading ? (
              <>
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </>
            ) : (
              <Course/>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
