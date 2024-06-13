// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FormGuided from "./FormGuided";
// import MultiStepForm from "./MultiStepForm";
// import TestForm from "./TestForm";
import { QuickTourComp } from "./quickTour";
import { AnnModalComp } from "./AnnModal";
import { FabTourGuide } from "./FabTourGuide";
// import MultiStepForm from "./JsonForm";
import { FAQ } from "./faq.js";
import { AnnouncementSlider } from "./AnnouncementCarousel.js";
 
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <React.StrictMode>
              <FormGuided />
            </React.StrictMode>
          }
        />
        {/* <Route
          path="/json"
          element={
            <React.StrictMode>
              <MultiStepForm />
            </React.StrictMode>
          }
        /> */}
        {/* <Route path="/multistep" element={<TestForm />} /> */}
         <Route path="/faq" element={<FAQ />} />
        <Route path="/quickTour" element={<QuickTourComp />} />
        <Route path="/annmodal" element={<AnnModalComp />} />
        <Route path="/fabTour" element={<FabTourGuide />} />
        <Route path="/annSlider" element={<AnnouncementSlider/>}/>
      </Routes>
    </div>
  );
};
 
export default App;