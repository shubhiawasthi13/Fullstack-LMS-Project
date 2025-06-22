import React from "react";
import { Card, CardTitle } from "@/components/ui/card";

function Dashboard() {
  return (
    <div className="p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
          <CardTitle className="text-lg font-semibold">Total Sales</CardTitle>
          <p className="mt-2 text-2xl font-bold">$12,340</p>
        </Card>

        {/* Add more cards if needed */}
      </div>
    </div>
  );
}

export default Dashboard;
