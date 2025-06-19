import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function Course() {
  return (
    <Card className="w-[300px] mx-auto dark:bg-gray-900 dark:border-gray-800 relative">
      {/* Image container with badge */}
      <div className="relative">
        <img
          src="./vite.svg"
          alt="Course"
          className="rounded-t-md w-full object-cover h-30"
        />
        <Badge className="absolute top-2 left-2 bg-green-400 text-black text-xs hover:bg-green-500">
          Best Seller
        </Badge>
      </div>

      <CardHeader>
        <CardTitle className="text-lg">React Basics</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground hover:underline">
          Learn the fundamentals of React including components, props, and state.
        </p>

        {/* Avatar + Name */}
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>PM</AvatarFallback>
          </Avatar>
          <h1 className="text-sm font-medium">Patel Mernstack</h1>
        </div>

        {/* Price aligned right */}
        <div className="flex justify-end">
          <span className="text-md font-semibold text-green-700">₹499</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Course;
