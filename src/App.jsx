import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gateway from "./pages/Gateway";
import Home from "./pages/Home";
import Checklist from "./pages/Checklist";
import Section from "./pages/Section";
import Review from "./pages/Review";
import Final from "./pages/Final";
import { FormProvider } from "./context/FormContext";

export default function App() {
  return (
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Gateway />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/section/:id" element={<Section />} />
          <Route path="/review" element={<Review />} />
          <Route path="/final" element={<Final />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}
