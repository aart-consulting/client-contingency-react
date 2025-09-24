import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

export default function Review() {
  const { selectedSections, formData } = useForm();
  const navigate = useNavigate();

  return (
    <div className="p-10 bg-[#0b1220] min-h-screen text-white">
      <h2 className="text-2xl mb-6">Review Your Plan</h2>
      <div className="space-y-6">
        {selectedSections.map((s, idx) => (
          <div key={idx} className="bg-[#121a2b] p-4 rounded-lg">
            <h3 className="text-lg font-bold">{s}</h3>
            {formData[s]
              ? Object.entries(formData[s]).map(([k, v]) => (
                  <p key={k}>
                    <strong>{k}:</strong> {v}
                  </p>
                ))
              : <p>(Not filled)</p>}
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/final")}
        className="mt-6 px-6 py-3 bg-green-600 rounded-lg"
      >
        Download Final PDF
      </button>
    </div>
  );
}