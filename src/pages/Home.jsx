import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1220] text-white">
      <h2 className="text-2xl mb-4">Welcome</h2>
      <div className="space-y-3">
        <button onClick={() => navigate("/checklist")} className="px-6 py-3 bg-blue-600 rounded-lg">Start New Form</button>
        <button onClick={() => navigate("/review")} className="px-6 py-3 bg-gray-600 rounded-lg">Continue Saved Form</button>
      </div>
    </div>
  );
}