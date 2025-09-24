import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

const sections = [
  "Licensee & Firm Details",
  "Administrator (Backup Person)",
  "Staff & Key Contacts",
  "Client Files & Property",
  "Banking & Trust Accounts",
  "Insurance & Benefits",
  "Technology & Security",
  "Administrator Duties",
  "Other Roles",
  "Succession / Winding Up"
];

export default function Checklist() {
  const { selectedSections, setSelectedSections } = useForm();
  const navigate = useNavigate();

  const toggleSection = (s) => {
    setSelectedSections((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  return (
    <div className="p-10 bg-[#0b1220] min-h-screen text-white">
      <h2 className="text-2xl mb-6">Select Sections</h2>
      <div className="space-y-2">
        {sections.map((s, idx) => (
          <label key={idx} className="block">
            <input
              type="checkbox"
              checked={selectedSections.includes(s)}
              onChange={() => toggleSection(s)}
              className="mr-2"
            />
            {s}
          </label>
        ))}
      </div>
      <button
        onClick={() => navigate("/section/0")}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg"
      >
        Create Form
      </button>
    </div>
  );
}