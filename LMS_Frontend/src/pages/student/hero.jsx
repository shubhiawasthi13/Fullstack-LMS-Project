import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-6">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Unlock Your <span className="text-blue-700 dark:text-blue-400">Skills</span> with <br />
          <span className="text-blue-700 dark:text-blue-400">GrowSkill</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Start learning new technologies, develop practical knowledge, and grow your career with expert-curated content.
        </p>

        <div className="w-full max-w-md">
          <Input
            type="text"
            placeholder="Search for courses, skills, topics..."
            className="w-full px-4 py-3 text-base"
          />
        </div>

        <Button
          size="lg"
          className="text-lg flex items-center gap-2 mt-4 sm:mt-6"
        >
          Explore Courses
      
        </Button>
      </div>
    </section>
  );
}
