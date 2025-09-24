import React, { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [selectedSections, setSelectedSections] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("contingencyForm");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSelectedSections(parsed.selectedSections || []);
      setFormData(parsed.formData || {});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contingencyForm", JSON.stringify({ selectedSections, formData }));
  }, [selectedSections, formData]);

  return (
    <FormContext.Provider value={{ selectedSections, setSelectedSections, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => useContext(FormContext);
