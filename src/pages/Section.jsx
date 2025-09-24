import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "../context/FormContext";

const fields = {
  "Licensee & Firm Details": ["Licensee / Firm Name", "LSO Number", "Phone", "Email", "Business Name", "Address", "CRA/HST/Incorp Info", "Emergency Contact"],
  "Administrator (Backup Person)": ["Administrator Name", "LSO Number", "Contact Info", "Alternate Admin Details"],
  "Staff & Key Contacts": ["Office Manager/Admin", "Bookkeeper", "Accountant", "IT Consultant", "Suppliers", "Landlord/Lease Info"],
  "Client Files & Property": ["Location of Active Files", "Location of Closed Files", "File Tracking Method", "Original Docs (Wills etc)"],
  "Banking & Trust Accounts": ["Bank Name", "Trust Accounts", "General Accounts", "Authorized Signers", "Access Details (POA etc.)"],
  "Insurance & Benefits": ["LAWPRO Details", "Other Insurance", "Staff Benefits Provider"],
  "Technology & Security": ["Hardware/Software Used", "Password/Access Storage"],
  "Administrator Duties": ["Notify Parties", "Transfer/Return Files Process", "Return Trust Funds", "Website/Comms Updates"],
  "Other Roles": ["Executor Roles", "Trustee Roles", "POA Roles", "Guardian Roles"],
  "Succession / Winding Up": ["How Files Returned/Transferred", "Storage Location for Closed Files"]
};

export default function Section() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedSections, formData, setFormData } = useForm();

  const section = selectedSections[id];
  const sectionFields = fields[section] || [];

  const handleChange = (f, val) => {
    setFormData({ ...formData, [section]: { ...formData[section], [f]: val } });
  };

  return (
    <div className="p-10 bg-[#0b1220] min-h-screen text-white">
      <h2 className="text-2xl mb-6">{section}</h2>
      <div className="space-y-4">
        {sectionFields.map((f, idx) => (
          <div key={idx}>
            <label className="block">{f}</label>
            <input
              type="text"
              value={formData[section]?.[f] || ""}
              onChange={(e) => handleChange(f, e.target.value)}
              className="w-full px-3 py-2 bg-[#121a2b] border border-gray-600 rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate(id > 0 ? `/section/${Number(id) - 1}` : "/checklist")}
          className="px-6 py-3 bg-gray-600 rounded-lg"
        >
          Back
        </button>
        <button
          onClick={() =>
            id < selectedSections.length - 1
              ? navigate(`/section/${Number(id) + 1}`)
              : navigate("/review")
          }
          className="px-6 py-3 bg-blue-600 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}