import React from "react";

export default function Final() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1220] text-white">
      <h2 className="text-2xl mb-4">✅ Success!</h2>
      <p>Your Client Contingency Plan has been generated.</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg">
        Download Filled PDF
      </button>
    </div>
  );
}