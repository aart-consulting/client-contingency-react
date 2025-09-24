import React from "react";
import { useNavigate } from "react-router-dom";

export default function Gateway() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1220] text-white">
      <img src="/aart-logo.png" alt="AART Consulting" className="w-40 mb-6" />
      <h1 className="text-3xl font-bold">Client Contingency Planning Tool</h1>
      <p className="mt-4 text-gray-400 max-w-lg text-center">
        This tool helps law firms prepare for unexpected events by documenting critical firm details.
      </p>
      <button
        onClick={() => navigate("/home")}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Enter Tool
      </button>
    </div>
  );
}